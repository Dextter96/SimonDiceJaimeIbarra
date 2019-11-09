using SimonDiceAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SimonDiceAPI.Controllers
{
    public class JugadoresController : ApiController
    {
        private static Contexto _contexto;

        public JugadoresController()
        {
            _contexto = new Contexto();
        }

        protected override void Dispose(bool disposing)
        {
            _contexto.Dispose();
        }

 
 
    }

    
}
