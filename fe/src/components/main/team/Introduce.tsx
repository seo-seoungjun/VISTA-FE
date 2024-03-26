import React, { useState } from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import styled from 'styled-components';
import { Iintroduce } from '../../../atoms/main/atom.team';

const Profile = styled.div`
  display: 'flex';
  flex-direction: 'column';
  width: 100%;
  flex-shrink: 0;
  flex-basis: 330px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 80%;
  padding: 10px;
  pointer-events: none;
`;

const NameAndRoll = styled.div`
  padding: 30px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Name = styled.span`
  font-size: 22px;
  color: ${(props) => props.theme.mainPage.mostHighlightColor};
`;

const Roll = styled.span``;

const SelfIntroduce = styled.div`
  top: 0;
  opacity: 0;
  flex-shrink: 0;
  flex-basis: 330px;
  position: relative;
  background-color: black;
  transition: top 1s, opacity 1s;
  &.on-hover {
    top: -100%;
    opacity: 1;
  }
`;

const Discript = styled.p`
  padding: 20px;
  text-align: center;
  color: ${(props) => props.theme.mainPage.TitleColor};
`;

function Introduce({ name, roll, say, url }: Iintroduce) {
  const onContentHoverStart = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const el = target.lastChild as HTMLDivElement;
    console.log(el);
    el?.classList.add('on-hover');
  };

  const onContentHoverEnd = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const el = target.lastChild as HTMLDivElement;
    console.log(el);
    el?.classList.remove('on-hover');
  };

  return (
    <>
      <motion.div
        className="content"
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        onHoverStart={(e) => onContentHoverStart(e)}
        onHoverEnd={(e) => onContentHoverEnd(e)}
      >
        <Profile className="ctx">
          <ImgWrapper>
            <ProfileImg src={`http://localhost:3000/Images/${url}`} />
          </ImgWrapper>
          <NameAndRoll>
            <Name>{name}</Name>
            <Roll>{roll}</Roll>
          </NameAndRoll>
        </Profile>
        <SelfIntroduce className="ctx">
          <Discript>{say}</Discript>
        </SelfIntroduce>
      </motion.div>
    </>
  );
}

export default Introduce;
