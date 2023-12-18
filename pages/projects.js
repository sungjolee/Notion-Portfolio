import Head from "next/head";
import Layout from "../components/layout";
import { DATABASE_ID, TOKEN } from "../config/index";
import ProjectItem from "../components/projects/project-item";

export default function Projects({ projects }) {
  console.log(projects);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10">
        <Head>
          <title>포트폴리오</title>
          <meta name="description" content="포트폴리오" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-1xl font-bold sm:text-3xl">
          총 프로젝트 :
          <span className="pl-4 text-blue-500">{projects.length}</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 w-full">
          {projects.map((project) => (
            <ProjectItem key={project.id} data={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

// 빌드 타임에 호출
export async function getStaticProps() {
  const { Client } = require("@notionhq/client");

  const notion = new Client({ auth: TOKEN });

  const databaseId = DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: 100,
    sorts: [
      {
        property: "Name",
        direction: "ascending",
      },
    ],
  });

  console.log("RESPONSE :", response);

  const projects = response.results;

  return { props: { projects } };
}
