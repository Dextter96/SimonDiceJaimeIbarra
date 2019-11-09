using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SimonDiceAPI.Models
{
    public class Jugador
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public int Puntaje { get; set; }
        public int Nivel { get; set; }
    }
}