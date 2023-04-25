case 'hi':

      mikupic ='https://wallpapercave.com/wp/wp6299451.jpg'
    
        
 const needhelpmenu = `Brauchst du Hilfe, ${pushname} Senpai? Geben Sie *${prefix}help* ein wenn sie meine befehlsliste sehen wollen .`
     
         let butRun = [
                {buttonId: `${prefix}help`, buttonText: {displayText: 'Help'}, type: 1}
                ]
                let buttonMessage = {
                    image:fs.readFileSync('./Assets/Nishikigi.Chisato.600.3752321.jpg'),
                    caption: needhelpmenu,
                    footer: `${global.BotName}`,
                    buttons: butRun,
                    headerType: 4
                }
            conn.sendMessage(m.chat,buttonMessage,{quoted:m})
                }
break

     