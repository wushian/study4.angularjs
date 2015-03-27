using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DemoMVC.Web.Controllers
{
    public class HelloController : Controller
    {
        // GET: Hello
        public ActionResult Index()
        {
            // test
            return View();
        }

        public ActionResult HellojQuery()
        {
            return View();
        }

        public ActionResult HelloAngular()
        {
            return View();
        }
    }
}