using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace mission12_giuliani.Controllers;

[ApiController]
[Route("[controller]")]
public class TeamsController : ControllerBase
{
    private readonly ILogger<TeamsController> _logger;

    public TeamsController(ILogger<TeamsController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public string Get()
    {
        using StreamReader reader = new("/Users/nikgiuliani/projects/is-core-projects/is-413/mission-12/mission12_giuliani/mission12_giuliani/Assets/CollegeBasketballTeams.json");
        var json = reader.ReadToEnd();

        object jsonObject = JsonConvert.DeserializeObject(json);

        return jsonObject.ToString();

    }
}

