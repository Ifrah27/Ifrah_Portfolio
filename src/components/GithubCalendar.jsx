import { GitHubCalendar } from "react-github-calendar";
import { aboutMe } from "../constants";
import styles from "../style";

const GithubCalendarSection = () => {
  const username = aboutMe.githubUsername;

  return (
    <section id="githubContributions" className={`${styles.paddingY} flex flex-col items-center`}>
      
      {/* Heading */}
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white text-center mb-4">
        GitHub <span className="text-gradient">Activity</span>
      </h2>

      {/* Impact Line (IMPORTANT) */}
      <p className="text-dimWhite text-[18px] text-center max-w-[600px] mb-10">
        Consistently building projects and solving problems, showcasing an active development journey.
      </p>

      {/* Stats Cards */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        
        <div className="bg-[#111] p-4 rounded-xl border border-gray-800 hover:scale-105 transition">
          <img 
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=github_dark`} 
            alt="GitHub Stats" 
          />
        </div>

        <div className="bg-[#111] p-4 rounded-xl border border-gray-800 hover:scale-105 transition">
          <img 
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=github_dark`} 
            alt="Top Languages" 
          />
        </div>

      </div>

      {/* Activity Graph */}
      <div className="w-full flex justify-center mb-12 px-4">
        <img 
          src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github-dark`} 
          alt="GitHub Activity Graph" 
          className="rounded-xl border border-gray-800 w-full max-w-[1100px]"
        />
      </div>

      {/* Contribution Calendar */}
      <div className="w-full max-w-[1000px] bg-[#0a0a0a] p-6 rounded-2xl border border-gray-800 shadow-xl">
        <h3 className="text-white text-lg mb-6">Contribution Calendar</h3>
        
        <div className="overflow-x-auto flex justify-center">
          <GitHubCalendar
            username={username}
            colorScheme="dark"
            blockSize={15}
            blockMargin={4}
            fontSize={14}
          />
        </div>
      </div>

    </section>
  );
};

export default GithubCalendarSection;