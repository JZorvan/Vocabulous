using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Vocabulous.Startup))]
namespace Vocabulous
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
