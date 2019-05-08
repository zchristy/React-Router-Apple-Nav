import styled from 'styled-components';

// ===== Sub Nav =====

export const SubNavBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 116px;
  background-color: #F6F6F6;
`;

export const SubNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;

    a {
      text-decoration: none;
      color: #303030;
    }
`;

// ===== Main Content images =====
export const ContentImg = styled.img`
  width: 100%;
  height: auto;
`;

// ===== Bag Drop Down =====
export const BagCaret = styled.span`
  content: "";
  display: block;
  position: fixed;
  top: 38px;
  right: 209px;
  width: 12px;
  height: 12px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transform-origin: 0% 0;
  transform-origin: 0% 0;
  background-color: #fff;
  border-left: 1px solid #d6d6d6;
  border-top: 1px solid #d6d6d6;
  z-index: 1;
`;

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: noWrap;
  position: absolute;
  top: 48px;
  right: 67px;
  border: 1px solid #d6d6d6;
  border-radius: 2px;
  width: 250px;
  height: 300px;
  background-color: #fff;
  padding: 0 20px 5px 20px;
`;

export const BagMessage = styled.p`
  color: #888;
  padding: 35px 0;
  margin: 0;
  text-align: center;
`;

export const BagLink = styled.div`
  color: #0070c9;
  font-size: 0.9rem;
  display: block;
  line-height: 43px;
  padding: 0 30px;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 5px 0;
  padding: 0;
  border-top: 1px solid #e3e3e3;
`;

export const BagIcon = styled.i`
  margin-right: 10px;
  width: 25px;
`;
