        //<![CDATA[
        document.addEventListener('DOMContentLoaded', function() {
            var chatbotWidget = document.getElementById('chatbot-widget');
            chatbotWidget.innerHTML = '<p>Cargando el asistente virtual...</p>'; // Muestra el mensaje de carga

            // Aquí pega el script proporcionado por tu plataforma de chatbot
            // Ejemplo de Kommunicate (DEBES REEMPLAZARLO CON TU SCRIPT):
            (function(d, m){
                var kommunicateSettings =
                    {"appId":"YOUR_APP_ID","popupWidget":true,"automaticChatOpenOnNavigation":true};
                var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
                s.src = "https://widget.kommunicate.io/v2/kommunicate.min.js";
                var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
                window.kommunicate = m;
                m._globals = kommunicateSettings;
            })(document, window.kommunicate || {});
			
            // Ejemplo de integración de Dialogflow (¡Esto es solo un ejemplo, usa tu propio script!)
            /*
            window.addEventListener('load', function() {
                const script = document.createElement('script');
                script.src = "https://www.gstatic.com/dialogflow-cx/react/cx.js";
                script.async = true;
                script.onload = () => {
                  //  window.renderDialogflow("YOUR_PROJECT_ID", "YOUR_LOCATION", "YOUR_AGENT", "chatbot-widget");
                   console.log('Dialogflow CX script loaded');
                };
                document.head.appendChild(script);


                function renderDialogflow(projectId, location, agentName, elementId) {
                    const rootElement = document.getElementById(elementId);
                    if (!rootElement) {
                        console.error(`Element with id "${elementId}" not found`);
                        return;
                    }

                    const sessionInfo = {
                        sessionId: crypto.randomUUID(),
                    };
                    const queryParams = {
                        projectId: projectId,
                        location: location,
                        agent: agentName,
                    };

                  try {
                        CX.render({
                            root: rootElement,
                            sessionInfo: sessionInfo,
                            queryParams: queryParams,
                        });
                    } catch (error) {
                       console.error("Dialogflow render error", error)
                    }
                }
            });
            */
        });
        //]]>