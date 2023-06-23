using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.IO;

namespace AnimeApp.Controllers
{
    [ApiController]
    [Route("anime")]
    public class AnimeController : ControllerBase
    {

        // anime/{PageNumber}
        [HttpGet("{page:int}")]
        public string Get(int page)
        {
            string filePath = @$"C:/Users/SebCy/Documents/Code/2-Data/Jikan/Anime/Anime-Page-{page}.txt";
            return System.IO.File.ReadAllText(filePath);
        }


        // anime/top
        [Route("top")]
        public class AnimeTopController : ControllerBase
        {
            // anime/top/{PageNumber}
            [HttpGet("{page:int}")]
            public string Get(int page)
            {
                string filePath = @$"C:/Users/SebCy/Documents/Code/2-Data/Jikan/Top/Anime/Anime-Page-{page}.txt";
                return System.IO.File.ReadAllText(filePath);
            }
        }


        // anime/genres
        [Route("genres")]
        public class AnimeGenreController : ControllerBase
        {
            [HttpGet]
            public string Get()
            {
                string filePath = @$"C:/Users/SebCy/Documents/Code/2-Data/Jikan/Genres/Anime-Genres.txt";
                return System.IO.File.ReadAllText(filePath);
            }
        }

    }

}

