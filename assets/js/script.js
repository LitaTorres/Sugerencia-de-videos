
// PUNTO 1 PATRON DEL MODULO 
const moduloVideo = (() => { 
    let recibir = (url, id) => { 
        var iframe = document.getElementById(id); 
        iframe.setAttribute("src", url); 
    };

    return {
        recibir 
    };
})();

//CLASE SUPER PUNTO 2
class Multimedia { //partiendo x la 1ra clase
    constructor(url) { 
        this._url = url; 
    }    

    //METODOS
    get url() { 
        return this._url; 
    }

    set url(nueva_Url){ 
        this._url = nueva_Url
    }

    setInicio() { 
        return "Este método es para realizar un cambio en la URL del video";
    }
}

//CLASE HIJA PUNTO 3
class Reproductor extends Multimedia { //la clase hija que se extiende de multimedia
    constructor(url, id) { 
        super(url);  
        this._id = id; 
    }

    //METODO GET - MULTIMEDIA - SETINICIO

    get id() { 
        return this._id; 
    }

    playMultimedia(){ 
         return moduloVideo.recibir(this._url, this.id);
    }

    setInicio(tiempo) { 
        let nuevaUrl = `${this.url}&start=${tiempo}` 
        return this.url = nuevaUrl; 
    }

}

// PUNTO 4 Aca para crear 3 instancias de la clase Reproductor para musica, pelicula y serie con sus urls
let musicaReproductor = new Reproductor("https://www.youtube.com/embed/OXaPQyyT1ak?si=gS-uDc2jg5HXGSj2", "musica");
let peliculaReproductor = new Reproductor("https://www.youtube.com/embed/Lxy94QBt1uY?si=CvDGKbqCL1gSZe08", "peliculas");
let serieReproductor = new Reproductor("https://www.youtube.com/embed/fgM1whMyww4?si=0UTI8THI7ypz3-U9", "series");

// PUNTO 6 aca para utilizar el metodo setInicio(tiempo) para modificar el tiempo de inicio en las instancias creadas
musicaReproductor.setInicio(42); 
peliculaReproductor.setInicio(76);
serieReproductor.setInicio(30);

// PUNTO 5 Aca para invocar al método playMultimedia() para cada instancia creada
musicaReproductor.playMultimedia(); 
peliculaReproductor.playMultimedia(); 
serieReproductor.playMultimedia();

