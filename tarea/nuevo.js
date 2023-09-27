let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras : function  ( horas) {
        if (this.energia >= horas * 5) {
            this.energia  -= horas * 5
            this.experiencia += horas * 5
        }
    }

};