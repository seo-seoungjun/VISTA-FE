import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ToggleBtnWapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-start;
`;

const ToggleSpanWapper = styled.span`
  position: relative;
  display: none;

  span {
    padding: 5px;
    background-color: #ffffff;
    color: black;
    position: fixed;
    display: none;
  }
  &[data-state='displayed-open'] {
    span {
      display: block;
    }
  }
`;

const ToggleBtn = styled.button`
  cursor: pointer;
`;

function SideBarToggleBtn() {
  const sideBarPopUpRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const element = e.target as HTMLSpanElement;
      element.dataset.state = 'displayed-open';
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const element = e.target as HTMLSpanElement;
      element.dataset.state = 'close';
    };

    const toggleBtnClick = (e: MouseEvent) => {
      const element = document.querySelector('.header') as HTMLDivElement;
      element.style.visibility = 'visible';
      const btn = sideBarPopUpRef?.current as HTMLSpanElement;
      btn.style.display = 'none';

      const mql = window.matchMedia('(max-width: 730px)');

      if (mql.matches) {
        element.style.width = '100vw';
      } else {
        element.style.width = '180px';
      }
    };

    sideBarPopUpRef?.current?.addEventListener('mouseenter', (e) =>
      handleMouseEnter(e)
    );
    sideBarPopUpRef?.current?.addEventListener('mouseleave', (e) =>
      handleMouseLeave(e)
    );
    sideBarPopUpRef?.current?.addEventListener('click', (e) =>
      toggleBtnClick(e)
    );

    return () => {
      sideBarPopUpRef?.current?.removeEventListener('mouseenter', (e) =>
        handleMouseEnter(e)
      );
      sideBarPopUpRef?.current?.removeEventListener('mouseleave', (e) =>
        handleMouseLeave(e)
      );
      sideBarPopUpRef?.current?.removeEventListener('click', (e) =>
        toggleBtnClick(e)
      );
    };
  }, []);

  return (
    <ToggleBtnWapper>
      <ToggleSpanWapper
        className="toggleBtn"
        data-state="closed"
        ref={sideBarPopUpRef}
      >
        <ToggleBtn>X</ToggleBtn>
        <span>사이드바 열기</span>
      </ToggleSpanWapper>
    </ToggleBtnWapper>
  );
}

export default SideBarToggleBtn;
