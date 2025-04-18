using Microsoft.AspNetCore.Mvc;

namespace server.Controllers;

[ApiController]
[Route("[controller]")]
public class UserDataController : ControllerBase
{

    public UserDataController(){

    }

    [HttpGet(Name="GetUserData")]
    public UserData Get(){
        return new UserData(1, "123.123.0.1");
    }

    [HttpPost(Name="PostUserData")]
    public IActionResult Post([FromBody] UserData data){
        return Ok(new { message = "UserData received from " + data.ip, data });
    }
}

public record UserData(int id, string ip);