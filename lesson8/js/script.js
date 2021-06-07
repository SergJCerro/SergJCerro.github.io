function log() {
    setTimeout(
      console.log.bind(
        console,
        "%c Created by : Sergio J Cerritos %c",
        "background-color: #bdd4e7;background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);padding:5px;border-radius: 5px;line-height: 26px;",
        ""
      )
    );
    
  }
  log();