using Spock_BSDemo.Models;
using Spock_BSDemo.Classes;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Spock_BSDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";
            EmailModel model = new EmailModel();
            return View();
        }

        public ActionResult BSDemo()
        {

            return View();
        }

        public ActionResult JSDemo()
        {

            return View();
        }

        public ActionResult MathExcercise()
        {

            return View();
        }

        public ActionResult FactorialDemo()
        {

            return View();
        }

        public ActionResult PalindromeDemo()
        {

            return View();
        }

        public ActionResult FizzBuzz()
        {

            return View();
        }
        public ActionResult SOAF()
        {

            return View();
        }
        public ActionResult PortfolioDemo()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Contact(EmailModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var body = "<p>Email From: <bold>{0}</bold> ({1})</p><p>Message:</p><p>{2}</p>";
                    var from = "MyPortfolio<dc.carter.dev@gmail.com>";
                    model.Body = "This is a message from your portfolio site. The name the email of the contacting person is above.";
                    var email = new MailMessage(from, ConfigurationManager.AppSettings["emailto"])
                    {
                        Subject = "Portfolio Contact Email",
                        Body = string.Format(body, model.FromName, model.FromEmail, model.Body),
                        IsBodyHtml = true
                    };
                    var svc = new PersonalEmail();
                    await svc.SendAsync(email);

                    return View(new EmailModel());
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    await Task.FromResult(0);
                }
            }
            return View(model);
        }
    }
}