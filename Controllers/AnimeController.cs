using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.IO;

namespace AnimeApp.Controllers
{
    [ApiController]
    [Route("anime")]
    public class AnimeController : ControllerBase
    {
        [HttpGet("{page:int}")]
        public string Get(int page)
        {
            string filePath = @$"C:/Users/SebCy/Documents/Code/2-Data/Jikan/Anime/Anime-Page-{page}.txt";
            string fileContent = System.IO.File.ReadAllText(filePath);

            return fileContent;
        }
    }
}

