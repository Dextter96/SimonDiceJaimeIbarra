using MySql.Data.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SimonDiceAPI.Models
{
    [DbConfigurationType(typeof(MySqlEFConfiguration))]
    public class Contexto : DbContext
    {
        public DbSet Jugadores
        {
            get;
            set;
        }
        public Contexto() : base("DefaultConnection")
        {

        }
    }
    
}