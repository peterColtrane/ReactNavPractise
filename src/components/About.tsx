import { useParams } from "react-router-dom";

export const About = () => {
  const { secretParameter } = useParams();
  return (
    <>
      <h2>Om oss</h2>
      <p>
        Om denna text står själv har inget värde har tilldelats komponenten
        About's paramater!
      </p>
      {secretParameter && (
        <p>
          Men om denna text också står med har Värdet "{secretParameter}" har
          tilldelats komponenten About's paramater!
        </p>
      )}
      {/* om något värde tilldelats till secretParameter skrivs p-taggen ut */}
    </>
  );
};
