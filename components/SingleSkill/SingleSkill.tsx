import React, { memo, useMemo } from "react";
import { SkillBar, SkillsContainer } from "./singleskills.elements";
import { DiFirebase, DiNodejsSmall, DiReact, DiSass } from "react-icons/di";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRedux,
  SiFirebase,
  SiSocketDotIo,
  SiStyledComponents,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiNextDotJs,
} from "react-icons/si";

import { Row } from "../../styles/uielements";

interface ISingleSkill {
  skill: {
    text: string;
    percentage: string;
    type: string;
  };
}
const SingleSkill = ({ skill }: ISingleSkill) => {
  const icons = useMemo(() => {
    if (skill.type === "web") {
      return (
        <div className="icons">
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiTypescript />
          <DiNodejsSmall />
          <DiReact />
          <SiRedux />
          <SiNextDotJs />
          <SiMongodb />
          <SiPostgresql />
          <DiSass />
          <SiSocketDotIo />
          <SiStyledComponents />
        </div>
      );
    } else if (skill.type === "mobile") {
      return (
        <div className="icons">
          <SiJavascript />
          <SiTypescript />
          <DiReact />
          <SiRedux />
          <SiMongodb />
          <SiFirebase />
          <SiStyledComponents />
        </div>
      );
    } else if (skill.type === "design") {
      return (
        <div className="icons">
          <SiFigma />
          <SiAdobephotoshop />
          <SiAdobeillustrator />
          <SiAdobexd />
        </div>
      );
    }
  }, [skill.type]);

  return (
    <SkillsContainer>
      <h5>{skill.text}</h5>
      {icons}
      <SkillBar percentage={skill.percentage}>
        <span></span>
      </SkillBar>
    </SkillsContainer>
  );
};

export default memo(SingleSkill);
