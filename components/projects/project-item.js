import Image from "next/image";

export default function ProjectItem({ data }) {
  console.log("DATA :", data);
  const project = data.properties;

  const projectTitle = project.Name.title[0].plain_text;
  const description = project.Description.rich_text[0].text.content;
  const startDate = project.Period.date.start;
  const endDate = project.Period.date.end;
  const imgSrc = data.cover.external?.url || data.cover.file?.url;
  const tags = project.Tags.multi_select;

  // 기간 계산 함수
  const calPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        // width="100%"
        // height="60%"
        width={600}
        height={400}
        alt="cover image"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{projectTitle}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <div>
          {`기간 : ${startDate} ~ ${endDate} 
          (${calPeriod(startDate, endDate)} 일)`}
        </div>
        <div className="flex items-start mt-2">
          {tags.map((tag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={tag.id}
            >
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
