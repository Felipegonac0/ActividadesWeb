import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Header />
      <main className="container justify-center mx-auto w-max px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 w-max">
          MAJOR EXTRACURRICULAR PROJECTS
        </h1>
        <section className="mb-8 w-max">
          <h2 className="font-bold pb-2">
            2023 - Scholarvy back-end development coordinator
          </h2>
          <ul className="list-disc pb-4">
            <li className="pb-1">
              Led a team of 5 developers to the creation of an API and database
              with NodeJs, Express, Postgresql, and Open AI.
            </li>
            <li className="pb-1">
              Teamed up with other area coordinators to negotiate and discuss
              the scalability of the project.
            </li>
            <li className="pb-1">
              Managed to reduce the users' necessity of using multiple
              applications into just one.
            </li>
            <a className="text-cyan-900" href="https://www.scholarvy.com/">
              Link to landing page
            </a>
          </ul>
          <h2 className="font-bold pb-2">
            2023 - Recruitment Process Optimization System with Generative AI
          </h2>
          <ul className="list-disc pb-4">
            <li className="pb-1">
              Achieved 3rd place in Softtek Challenge of Mexico’s largest
              hackathon, HackMty 2023
            </li>
            <li className="pb-1">
              Implemented a resume analyzer and search engine with Generative AI
              to optimize recruitment processes.
            </li>
            <li className="pb-1">
              Collaborated with a team of 4 discussing, designing, and
              implementing the application in under 24 hours.
            </li>
            <li className="pb-1">
              Contributed as back-end developer with Flask, Frida GPT, and
              techniques of Prompt Engineering.
            </li>
            <a
              className="text-cyan-900"
              href="https://github.com/pedroalonsoms/fridacv"
            >
              Link to Github
            </a>
          </ul>
          <h2 className="font-bold pb-2">
            2023 - TecRacing Eletraton Telemetry Database and API
            <a href="https://github.com/pedroalonsoms/fridacv">
              ( Link to landing page )
            </a>
          </h2>
          <ul className="list-disc pb-4">
            <li className="pb-1">
              Designed and implemented a database and API capable of saving and
              processing racing data for an electric car.
            </li>
            <li className="pb-1">
              Led a team of students from multiple specializations to coordinate
              a telemetry system with IoT.
            </li>
            <li className="pb-1">
              Managed to reduce the users' necessity of using multiple
              applications into just one.
            </li>
            <li className="pb-1">
              Improved car repair with data management, reducing the diagnosis
              process from 3 days to 5 hours, approximately.
            </li>
            <a
              className="text-cyan-900"
              href="https://github.com/Felipegonac0/TecRacingTelemetry"
            >
              Link to Github
            </a>
          </ul>
          <h2 className="font-bold pb-2">
            2021 - Phycological Test Bot - Dulas App
          </h2>
          <ul className="list-disc pb-4">
            <li className="pb-1">
              Awarded 1st place in Hidalgo’s first online hackathon, HackNow
              2021.
            </li>
            <li className="pb-1">
              Engineered a Python bot that evaluates and gives a simple
              physiological analysis from patients to real doctors.
            </li>
            <li className="pb-1">
              Led a team of 3 developers to design and implement the bot with
              Python and Yale’s emotional program RULER.
            </li>
            <a
              className="text-cyan-900"
              href="https://github.com/Felipegonac0/HackNow"
            >
              Link to Github
            </a>
          </ul>
        </section>
        <h1 className="text-3xl font-bold mb-4 w-max">
          MAJOR ACADEMIC PROJECTS
        </h1>
        <section className="mb-8 w-max">
          <h2 className="font-bold pb-2">
            2023 - ITESM’s teacher evaluation system gamification on the web
          </h2>
          <ul className="list-disc pb-4">
            <li className="pb-1">
              Improved TESM’s main satisfactory survey with gamification
              gamified website.
            </li>
            <li className="pb-1">Programmed a gamified survey with Unity.</li>
            <li className="pb-1">
              Designed and implemented a MySQL database and connected Unity with
              the API of the project.
            </li>
            <li className="pb-1">
              Recognized as the best solution to improve student participation
              by the Quality Department of ITESM.
            </li>
            <a
              className="text-cyan-900"
              href="https://github.com/Felipegonac0/ecoa"
            >
              Link to Github
            </a>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
