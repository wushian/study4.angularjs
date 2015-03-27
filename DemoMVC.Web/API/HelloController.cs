using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace DemoMVC.Web.API
{
    public class HelloController : ApiController
    {
        public HttpResponseMessage Get()
        {
            var response = new List<string>() { "Kyle", "Sky" };
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        [HttpPost]
        public HttpResponseMessage Post(int Id)
        {
            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}
