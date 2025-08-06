const storedInputs = {};
let nameStep = 1;
let wasManualInputJustUsed = false;

let waveSurferInstance = null;
let currentAudioUrl = null;
let currentPlayingButton = null;

let isProcessingMessage = false;


// Track clicked button labels to prevent duplicates
let clickedButtonLabels = new Set();

document.addEventListener('DOMContentLoaded', () => {
    const message1 = document.getElementById('message1');
    if (!message1) return;

    message1.classList.remove('hidden');

    async function showSequentialMessages() {
        const message1 = document.getElementById('message1');
        if (!message1) return;
    
        const elements = Array.from(message1.querySelectorAll('p, img, button, audio, .manual-input'));
    
        for (let i = 0; i < elements.length; i++) {
            const el = elements[i];
            const isTyping = el.getAttribute('data-typing') === 'true';
            const typingDuration = parseInt(el.getAttribute('data-typing-duration')) * 1000 || 2000;
            const elDelay = parseInt(el.getAttribute('data-delay')) * 1000 || 500;
    
            await delay(elDelay);
    
            if (el.tagName === 'P') {
                await showBotMessage(el);
                if (isTyping) await delay(500);
            } else if (el.classList.contains('manual-input')) {
                await showManualInput(el);
            } else if (el.tagName === 'BUTTON') {
                await new Promise((resolve) => {
                    const delay = parseInt(el.getAttribute('data-delay')) * 1000 || 0;
                    setTimeout(() => {
                        moveButtonsToContainer(el);
                        resolve();
                    }, delay);
                });
            } else if (el.tagName === 'AUDIO') {
                await showBotAudio(el); // uses existing WaveSurfer logic
            }
        }
    }
    

    showSequentialMessages();
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function appendUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'chat-message user-message';
    div.innerHTML = `<p>${text}</p>`;
    document.getElementById('chat-messages').appendChild(div);
    scrollToBottom();
}

function cleanNameInput(input) {
    const unnecessaryWords = ['é', 'meu nome é', 'meu nome', 'nome é', 'nome'];
    let cleanedInput = input.toLowerCase();
    unnecessaryWords.forEach(phrase => {
        cleanedInput = cleanedInput.replace(phrase, '').trim();
    });
    return cleanedInput.split(' ')[0];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function showNext(messageId, userResponse) {
    if (userResponse && !wasManualInputJustUsed) {
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('chat-message', 'user-message');
        userMessageDiv.innerHTML = `<p>${userResponse}</p>`;
        const chatMessages = document.getElementById('chat-messages');
        chatMessages.appendChild(userMessageDiv);
    }

    wasManualInputJustUsed = false;

    setTimeout(() => {
        scrollToBottom();

        const nextMessage = document.getElementById(messageId);
        if (nextMessage) {
            const elements = nextMessage.querySelectorAll('p, img, button, audio, .manual-input');
            let previousMessageShown = Promise.resolve();

            elements.forEach((element) => {
                const delay = element.getAttribute('data-delay') ? parseInt(element.getAttribute('data-delay')) * 1000 : 0;

                if (element.tagName.toLowerCase() === 'p') {
                    previousMessageShown = previousMessageShown.then(() => {
                        return new Promise((resolve) => {
                            setTimeout(() => {
                                showBotMessage(element).then(resolve);
                            }, delay);
                        });
                    });
                } else if (element.tagName.toLowerCase() === 'img') {
                    previousMessageShown = previousMessageShown.then(() => {
                        return new Promise((resolve) => {
                            setTimeout(() => {
                                showBotImage(element).then(resolve);
                            }, delay);
                        });
                    });
                } else if (element.tagName.toLowerCase() === 'audio') {
                    previousMessageShown = previousMessageShown.then(() => {
                        return new Promise((resolve) => {
                            setTimeout(() => {
                                showBotAudio(element).then(resolve);
                            }, delay);
                        });
                    });
                } else if (element.tagName.toLowerCase() === 'button') {
                    previousMessageShown = previousMessageShown.then(() => {
                        return new Promise((resolve) => {
                            setTimeout(() => {
                                moveButtonsToContainer(element);
                                scrollToBottom();
                                resolve();
                            }, delay);
                        });
                    });
                } else if (element.classList.contains('manual-input')) {
                    previousMessageShown = previousMessageShown.then(() => {
                        return showManualInput(element);
                    });
                }
            });

            // Inside showNext(), logo após elements.forEach()
            if (messageId === 'message8') {
                previousMessageShown = previousMessageShown.then(() => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                    injectObjectionTrigger();
                    resolve();
                    }, 1000);
                });
                });
            }
  
        }
    }, 100);
}


function showBotImage(imageElement) {
    return new Promise((resolve) => {
        const chatMessages = document.getElementById('chat-messages');
        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('bot-message');

        const img = document.createElement('img');
        img.src = imageElement.src || imageElement.getAttribute('data-src');
        img.alt = imageElement.alt || 'Bot Image';

        // Add specified classes from the HTML to the img element
        if (imageElement.className) {
            img.className = imageElement.className; // Copies all classes from the original element
        }

        botMessageDiv.appendChild(img);
        chatMessages.appendChild(botMessageDiv);
        scrollToBottom();

        // Adds the 'visible' class for a smooth transition
        setTimeout(() => {
            img.classList.add('visible');
        }, 100);

        // Simulates the image load time
        setTimeout(() => {
            resolve();
        }, 600);
    });
}

async function showBotMessage(element) {
    if (isProcessingMessage) return;
    isProcessingMessage = true;

    const chatMessages = document.getElementById('chat-messages');
    const botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('bot-message');
    botMessageDiv.style.padding = '0';
    botMessageDiv.style.transition = 'padding 0.3s ease-in-out';

    const typingIndicatorDiv = document.createElement('div');
    typingIndicatorDiv.classList.add('typing-indicator');
    typingIndicatorDiv.innerHTML = `<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>`;
    botMessageDiv.appendChild(typingIndicatorDiv);

    const messageParagraph = document.createElement('p');
    messageParagraph.style.display = 'none';
    botMessageDiv.appendChild(messageParagraph);

    chatMessages.appendChild(botMessageDiv);
    scrollToBottom();

    let messageContent = element.innerHTML;
    messageContent = messageContent.replace(/<span id="(.*?)"><\/span>/g, (_, id) => storedInputs[id] || '');

    const delay = parseInt(element.getAttribute('data-delay')) * 1000 || 0;
    const typingDuration = parseInt(element.getAttribute('data-typing-duration')) * 1000 || 2000;
    const audioUrl = element.getAttribute('data-audio') || null;

    await wait(delay);

    await new Promise((resolve) => {
        setTimeout(() => {
            typingIndicatorDiv.style.display = 'none';
            messageParagraph.style.display = 'block';
            setTimeout(() => {
                botMessageDiv.style.padding = '10px';
            }, 700);
            startTypingAnimation(messageParagraph, messageContent, resolve);
        }, typingDuration);
    });

    scrollToBottom();

    // Handle audio if present via data-audio
    if (audioUrl) {
        const audioWrapper = document.createElement('div');
        audioWrapper.classList.add('audio-wrapper');

        const waveformDiv = document.createElement('div');
        waveformDiv.id = 'waveform';
        audioWrapper.appendChild(waveformDiv);

        const playButton = document.createElement('i');
        playButton.className = 'fas fa-play';
        playButton.style.cursor = 'pointer';
        audioWrapper.appendChild(playButton);

        botMessageDiv.appendChild(audioWrapper);

        await playAudioAndWait(audioUrl, playButton);
    }

    isProcessingMessage = false;
}
  

function showManualInput(configElement) {
    return new Promise((resolve) => {
        const inputId = configElement.getAttribute('data-input-id') || 'input-unknown';
        const placeholder = configElement.getAttribute('data-placeholder') || 'Digite aqui';
        const popupText = configElement.getAttribute('data-popup') || '';
        const buttonLabel = configElement.getAttribute('data-button-label') || 'Enviar';
        const nextMessageId = configElement.getAttribute('data-next');

        const floatingContainer = document.getElementById('floating-manual-input');
        if (!floatingContainer) {
            console.error('Floating input container not found!');
            resolve();
            return;
        }

        floatingContainer.classList.remove('hidden');
        floatingContainer.innerHTML = `
            <div class="popup-hint">${popupText}</div>
            <div class="input-block">
                <textarea id="${inputId}" placeholder="${placeholder}" autocomplete="off"></textarea>
                <button><i class="fa fa-paper-plane"></i></button>
            </div>
        `;

        const textarea = document.querySelector(".input-block textarea");

        // Reset altura inicial
        textarea.style.height = '38px';
        textarea.style.overflowY = 'hidden';

        // Reutiliza ou cria div oculta para calcular altura
        let hiddenDiv = document.getElementById('textarea-shadow');
        if (!hiddenDiv) {
            hiddenDiv = document.createElement("div");
            hiddenDiv.id = 'textarea-shadow';
            hiddenDiv.style.position = "absolute";
            hiddenDiv.style.top = "0";
            hiddenDiv.style.left = "0";
            hiddenDiv.style.visibility = "hidden";
            hiddenDiv.style.whiteSpace = "pre-wrap";
            hiddenDiv.style.wordWrap = "break-word";
            hiddenDiv.style.boxSizing = "border-box";
            floatingContainer.appendChild(hiddenDiv);
        }

        textarea.addEventListener("input", () => {
            const styles = getComputedStyle(textarea);
            hiddenDiv.style.lineHeight = styles.lineHeight;
            hiddenDiv.style.fontSize = styles.fontSize;
            hiddenDiv.style.fontFamily = styles.fontFamily;
            hiddenDiv.style.width = styles.width;
            hiddenDiv.style.padding = styles.padding;

            hiddenDiv.textContent = textarea.value + '\u200b'; // força quebra correta

            const maxHeight = 120;
            const newHeight = hiddenDiv.scrollHeight;

            textarea.style.height = `${Math.min(newHeight, maxHeight)}px`;
            textarea.style.overflowY = newHeight > maxHeight ? 'auto' : 'hidden';
        });

        const sendBtn = document.querySelector(".input-block button");

        sendBtn.onclick = () => {
            const raw = textarea.value.trim();
            if (!raw) return;

            let cleaned;
            if (inputId === 'user-name') {
                cleaned = capitalizeFirstLetter(cleanNameInput(raw));
            } else {
                cleaned = raw.charAt(0).toUpperCase() + raw.slice(1);
            }

            storedInputs[inputId] = cleaned;
            appendUserMessage(cleaned);

            const previousParagraph = getPreviousQuestion(configElement);
            saveAnswerToLocalStorage(inputId, previousParagraph || placeholder, cleaned);

            floatingContainer.classList.add('hidden');
            wasManualInputJustUsed = true;

            if (nextMessageId) {
                showNext(nextMessageId, cleaned);
            }

            resolve();
        };
    });
}


const storedQuizData = JSON.parse(localStorage.getItem('quizData')) || {};

function saveAnswerToLocalStorage(id, question, answer) {
    storedQuizData[id] = {
        pergunta: question,
        resposta: answer
    };
    localStorage.setItem('quizData', JSON.stringify(storedQuizData));
}

function getPreviousQuestion(element) {
    let previous = element.previousElementSibling;
    while (previous) {
        if (previous.tagName === 'P') {
            return previous.textContent.trim();
        }
        previous = previous.previousElementSibling;
    }
    return null;
}



// Function to animate typing of the message with optional inline delay
function startTypingAnimation(element, content, resolve) {
    const hasCTA = content.includes('[cta-btn]');
    const cleanedContent = content.replace('[cta-btn]', '');

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = cleanedContent;
    const nodes = Array.from(tempDiv.childNodes);

    let nodeIndex = 0;

    function typeNextNode() {
        if (nodeIndex >= nodes.length) {
            if (hasCTA) {
                const ctaBtn = document.createElement('button');
                ctaBtn.classList.add('cta-button');
                ctaBtn.innerHTML = `<span class="cta-text">Liberar Acesso Agora</span>`;
                ctaBtn.onclick = () => {
                    window.location.href = 'https://pay.cakto.com.br/dnthi5a';
                };
                element.appendChild(document.createElement('br'));
                element.appendChild(ctaBtn);
            }

            scrollToBottom();
            resolve();
            return;
        }

        const node = nodes[nodeIndex];

        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent;
            let charIndex = 0;

            function typeChar() {
                if (charIndex >= text.length) {
                    nodeIndex++;
                    typeNextNode();
                    return;
                }

                const remaining = text.slice(charIndex);
                const delayMatch = remaining.match(/^\[\[delay:(\d+)\]\]/);

                if (delayMatch) {
                    const delayMs = parseInt(delayMatch[1]);
                    charIndex += delayMatch[0].length;
                    setTimeout(typeChar, delayMs);
                    return;
                }

                element.innerHTML += text[charIndex];
                charIndex++;
                setTimeout(typeChar, 30);
            }

            typeChar();
        }

        else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'BR') {
            element.appendChild(document.createElement('br'));
            nodeIndex++;
            typeNextNode();
        }

        else if (node.nodeType === Node.ELEMENT_NODE) {
            element.innerHTML += node.outerHTML;
            nodeIndex++;
            typeNextNode();
        }

        else {
            nodeIndex++;
            typeNextNode();
        }
    }

    typeNextNode();
}

function splitWithDelays(content) {
    const regex = /\[\[delay:(\d+)\]\]/g;
    let result = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(content)) !== null) {
        const textBefore = content.slice(lastIndex, match.index);
        if (textBefore) result.push({ type: 'text', value: textBefore });

        const delayMs = parseInt(match[1]);
        result.push({ type: 'delay', value: delayMs });

        lastIndex = regex.lastIndex;
    }

    const remainingText = content.slice(lastIndex);
    if (remainingText) result.push({ type: 'text', value: remainingText });

    return result;
}

/**
 * Splits the content string into tokens:
 * - { type: 'char', value: 'X' }
 * - { type: 'delay', delay: <number>, dotControl: 'true'/'false' }
 *
 * This ensures the actual <span ...> never appears in the final text.
 */
function parseContentIntoTokens(content) {
    // Regex to capture something like:
    //   <span id="bot-delay" dot-control="(true|false)" class="dots-jump" sec-delay="(\d+)"></span>
    // Order in the regex matters: first group is dotControl, second is delay
    const delayRegex = /<span[^>]*id="bot-delay"[^>]*dot-control="(true|false)"[^>]*sec-delay="(\d+)"[^>]*><\/span>/gi;

    let tokens = [];
    let lastIndex = 0;
    let match;

    while ((match = delayRegex.exec(content)) !== null) {
        // textBefore: everything in 'content' BEFORE this matched <span>
        const textBefore = content.substring(lastIndex, match.index);

        // Turn that preceding text into { type: 'char' } tokens
        for (let i = 0; i < textBefore.length; i++) {
            tokens.push({ type: 'char', value: textBefore[i] });
        }

        // Captured groups
        const dotControl = match[1]; // "true" or "false"
        const delayValue = parseInt(match[2], 10); // from sec-delay

        // Create the delay token
        tokens.push({
            type: 'delay',
            delay: delayValue,
            dotControl: dotControl
        });

        // Move the pointer
        lastIndex = delayRegex.lastIndex;
    }

    // Now push any leftover text after the last match
    const remainingText = content.substring(lastIndex);
    for (let i = 0; i < remainingText.length; i++) {
        tokens.push({ type: 'char', value: remainingText[i] });
    }

    return tokens;
}

// Function to move buttons to the container
function moveButtonsToContainer(button) {
    const buttons = button.parentElement.querySelectorAll('button');
    const buttonsContainer = document.getElementById('buttons-container');
    buttonsContainer.innerHTML = '';

    buttons.forEach(btn => {
        const newBtn = btn.cloneNode(true);
        newBtn.style.display = 'none';

        newBtn.onclick = function() {
            const label = newBtn.innerText.trim();
            if (!clickedButtonLabels.has(label)) {
                clickedButtonLabels.add(label);
                hideOtherButtonsWithText(label);
                hideCurrentButtons();

                const onclickAttr = btn.getAttribute('onclick');
                const next = onclickAttr ? onclickAttr.match(/'(.*?)'/)?.[1] : null;

                if (next) showNext(next, label);
            }
        };

        buttonsContainer.appendChild(newBtn);

        setTimeout(() => {
            if (!clickedButtonLabels.has(btn.innerText.trim())) {
                newBtn.style.display = 'block';
            }
        }, btn.getAttribute('data-delay') * 1000 || 0);
    });

    buttonsContainer.classList.remove('hidden');
    scrollToBottom();
}

// Function to hide other buttons with the same text
function hideOtherButtonsWithText(buttonText) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.innerText.trim() === buttonText) {
            button.style.display = 'none';
        }
    });
}

function hideCurrentButtons() {
    const buttonsContainer = document.getElementById('buttons-container');
    buttonsContainer.innerHTML = '';
}

function scrollToBottom() {
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to show typing indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.classList.add('typing-indicator');
    typingDiv.innerHTML = `<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>`;
    document.getElementById('chat-messages').appendChild(typingDiv);
    scrollToBottom();
    return typingDiv;
}

function hideTypingIndicator(typingDiv) {
    if (typingDiv) {
        typingDiv.remove();
    }
}

// Helper function to format time in mm:ss
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function startChat(result) {
    procrastinationResult = result;
}

document.addEventListener('focusin', () => {
    const activeEl = document.activeElement;
    if (activeEl.tagName === 'INPUT') {
        setTimeout(() => {
            activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300); // delay ensures it happens after keyboard appears
    }
});


// Export startChat for usage in quiz.js
window.startChat = startChat;


/* ----------------- Popup Objections ------------------ */

const objections = [
    {
        id: 'duvida1',
        label: 'Como eu recebo tudo depois do pagamento?',
        response: 'Assim que o pagamento é aprovado, você recebe tudo no seu e-mail: o teste do seu Tipo Magnético, o relatório completo com as características e o passo a passo pra ativar o seu poder de atração natural. É automático. [cta-btn]'
      },
      {
        id: 'duvida2',
        label: 'Isso aqui funciona mesmo? Não parece papo furado?',
        response: 'Funciona porque é baseado em comportamento feminino real. Não tem truque, cantada nem manipulação. Você aprende como usar o que já existe em você pra ativar o desejo feminino — e o resultado é quase imediato. [cta-btn]'
      },
      {
        id: 'duvida3',
        label: 'Preciso mudar quem eu sou ou fingir confiança?',
        response: 'Não. A ideia é justamente o contrário: parar de tentar copiar outros caras e descobrir o que te torna naturalmente magnético. Você não precisa fingir, só entender como seu Tipo age e usar isso a seu favor. [cta-btn]'
      },
      {
        id: 'duvida4',
        label: 'E se eu comprar e for só mais uma decepção?',
        response: 'Você tem 7 dias pra testar tudo com calma. Se achar que não serviu pra você, é só pedir reembolso. Sem perguntas. Mas sinceramente? Depois que você descobre seu Tipo, não tem mais volta — você começa a ver as coisas de outro jeito. [cta-btn]'
      },
      {
        id: 'duvida5',
        label: 'Nunca tive facilidade com mulheres… isso serve pra mim?',
        response: 'É exatamente pra quem sente isso. Esse método mostra que não é falta de beleza ou conversa: é questão de alinhar sua energia com o tipo certo de mulher. E quando você entende isso, tudo muda. [cta-btn]'
      }      
    ]      
  
  
  // Track which objections were already used
  const usedObjections = new Set();
  
  // Insert buttons dynamically into popup
  function renderObjectionOptions() {
    const container = document.getElementById('objection-options');
    container.innerHTML = '';
  
    objections.forEach(obj => {
      const btn = document.createElement('button');
      btn.textContent = obj.label;
      if (usedObjections.has(obj.id)) {
        btn.classList.add('used');
      }
  
      btn.onclick = () => {
        usedObjections.add(obj.id);
        hideObjectionPopupTwo();
        appendUserMessage(obj.label);

        // Remove any previous CTA button from the chat
        const previousCTA = document.querySelector('.cta-button');
        if (previousCTA && previousCTA.parentNode) {
        previousCTA.parentNode.removeChild(previousCTA);
        }

        simulateBotResponse(obj.response);
      };
  
      container.appendChild(btn);
    });
  }
  
  // Show the popup
  function showObjectionPopup() {
    document.getElementById('objection-popup').classList.remove('hidden');
  
    const triggerBtn = document.getElementById('popup-trigger-btn');
    if (triggerBtn) {
      triggerBtn.style.display = 'none';
    }
  
    const chat = document.getElementById('chat-messages');
    if (chat) {
      chat.classList.add('lock-scroll');
    }
  
    renderObjectionOptions();
  }
  
  
  // Hide the popup
  function hideObjectionPopup() {
    document.getElementById('objection-popup').classList.add('hidden');
  
    const triggerBtn = document.getElementById('popup-trigger-btn');
    if (triggerBtn) {
      triggerBtn.style.display = 'inline-block';
    }
  
    const chat = document.getElementById('chat-messages');
    if (chat) {
      chat.classList.remove('lock-scroll');
    }
  }

  function hideObjectionPopupTwo() {
    document.getElementById('objection-popup').classList.add('hidden');
  
    const chat = document.getElementById('chat-messages');
    if (chat) {
      chat.classList.remove('lock-scroll');
    }
  }

  // Correct structure for bot message + typing
  function createBotTypingBubble(messageContent, hasTyping = true, callback) {
    const chatMessages = document.getElementById('chat-messages');
  
    // Main bot message bubble
    const botDiv = document.createElement('div');
    botDiv.className = 'bot-message';
  
    // Typing animation
    const typing = document.createElement('div');
    typing.className = 'typing-indicator';
    typing.innerHTML = `<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>`;
    botDiv.appendChild(typing);
  
    // Message element
    const messageParagraph = document.createElement('p');
    messageParagraph.style.display = 'none'; // Hide initially
    botDiv.appendChild(messageParagraph);
  
    // Append everything
    chatMessages.appendChild(botDiv);
    scrollToBottom();
  
    const typingDuration = 1700;
  
    if (hasTyping) {
      setTimeout(() => {
        typing.style.display = 'none';
        messageParagraph.style.display = 'block';
        setTimeout(() => {
          botDiv.style.padding = '10px';
        }, 100);
  
        startTypingAnimation(messageParagraph, messageContent, () => {
          scrollToBottom();
          if (typeof callback === 'function') callback();
        });
      }, typingDuration);
    } else {
      typing.style.display = 'none';
      messageParagraph.style.display = 'block';
      setTimeout(() => {
        botDiv.style.padding = '10px';
      }, 10);
  
      startTypingAnimation(messageParagraph, messageContent, () => {
        scrollToBottom();
        if (typeof callback === 'function') callback();
      });
    }
  }
  
  function simulateBotResponse(message) {
    setTimeout(() => {
      createBotTypingBubble(message, true, () => {
        setTimeout(() => {
          injectObjectionTrigger();
        }, 1000);
      });
    }, 2000);
  }  
  
  // Append the "Outros caras se perguntam isso" button
  // Injects the popup trigger button into the dynamic container
  function injectObjectionTrigger() {
    console.log('✔️ Reinjetando botão de objeções');
  
    const container = document.getElementById('dynamic-btn-container');
    if (!container) return;
  
    container.innerHTML = '';
  
    const btn = document.createElement('button');
    btn.id = 'popup-trigger-btn';
    btn.className = 'csl-btn';
    btn.innerText = 'Outros caras se perguntam isso';
    btn.addEventListener('click', showObjectionPopup);
  
    container.appendChild(btn);
  }
  
  window.visualViewport?.addEventListener('resize', () => {
    const vv = window.visualViewport;
    const keyboardHeight = window.innerHeight - vv.height;
    const isKeyboardOpen = keyboardHeight > 150;

    const chat = document.getElementById('chat-messages');
    const floating = document.getElementById('floating-manual-input');

    if (isKeyboardOpen) {
        floating.style.bottom = `${keyboardHeight + 20}px`;

        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        if (chat) {
            chat.style.overflow = 'hidden';
            chat.style.touchAction = 'none';
        }
    } else {
        floating.style.bottom = '20px';

        document.body.style.overflow = '';
        document.body.style.position = '';
        if (chat) {
            chat.style.overflowY = 'scroll';
            chat.style.touchAction = '';
        }
    }
});


/* ========== WAVESURFER ========== */

// Utility to create a delay
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Add audio message with WaveSurfer
function addAudioMessage(audioElement, botMessageDiv) {
    return new Promise((resolve) => {
        const audioContainer = document.createElement('div');
        audioContainer.classList.add('audio-container', 'waveform-container');

        const playPauseBtn = document.createElement('button');
        playPauseBtn.classList.add('play-pause-btn');
        playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i><i class="fa-solid fa-pause" style="display: none;"></i>`;
        playPauseBtn.style.display = 'none'; // Hide button initially
        audioContainer.appendChild(playPauseBtn);

        const waveformDiv = document.createElement('div');
        waveformDiv.classList.add('waveform');
        audioContainer.appendChild(waveformDiv);

        botMessageDiv.appendChild(audioContainer);
        scrollToBottom();

        // Initialize WaveSurfer
        const wavesurfer = WaveSurfer.create({
            container: waveformDiv,
            waveColor: '#d9d9d9',
            progressColor: '#4CAF50',
            barWidth: 5,
            barHeight: 1.5,
            barGap: 1,
            barRadius: 10,
            height: 50,
            responsive: true,
            backend: /iPad|iPhone|iPod/.test(navigator.userAgent) ? 'MediaElement' : 'WebAudio',
            url: audioElement.getAttribute('data-src') || audioElement.src,
            interact: false,
        });

        wavesurfer.on('ready', () => {
            console.log('WaveSurfer ready');
            playPauseBtn.style.display = 'block';
            resetAudio();
        });

        wavesurfer.on('finish', () => {
            console.log('Audio finished');
            resetAudio();
            resolve();
        });

        playPauseBtn.addEventListener('click', () => {
            wavesurfer.playPause();
            if (wavesurfer.isPlaying()) {
                playPauseBtn.querySelector('.fa-play').style.display = 'none';
                playPauseBtn.querySelector('.fa-pause').style.display = 'inline-block';
            } else {
                playPauseBtn.querySelector('.fa-play').style.display = 'inline-block';
                playPauseBtn.querySelector('.fa-pause').style.display = 'none';
            }
        });

        function resetAudio() {
            wavesurfer.stop();
            wavesurfer.seekTo(0);
            playPauseBtn.querySelector('.fa-play').style.display = 'inline-block';
            playPauseBtn.querySelector('.fa-pause').style.display = 'none';
            console.log('Audio reset to initial state');
        }
    });
}

// Show bot audio with WaveSurfer integration
function showBotAudio(audioElement, allAudiosCompletedCallback) {
    return new Promise((resolve) => {
        const chatMessages = document.getElementById('chat-messages');
        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('chat-message', 'bot-message');
        chatMessages.appendChild(botMessageDiv);
        scrollToBottom();

        addAudioMessage(audioElement, botMessageDiv).then(() => {
            resolve(); // Notify when a single audio is done
            if (allAudiosCompletedCallback) {
                allAudiosCompletedCallback();
            }
        });
    });
}