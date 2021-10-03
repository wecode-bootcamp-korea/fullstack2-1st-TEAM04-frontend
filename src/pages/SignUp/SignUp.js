import React from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import RadioBtns from './components/RadioBtns/RadioBtns';
import TableRows from './components/TableRows/TableRows';
import './SignUp.scss';

class SignUp extends React.Component {
  render() {
    return (
      <div className="SignUp">
        <div className="signUpWrapper">
          <h1 className="signUpTitle">회원가입</h1>

          <table className="basicInfo">
            <thead>
              <tr>
                <td className="signUpSubTitle firstThTd">기본정보</td>
                <td className="secondThTd" colSpan="3">
                  <RadioBtns
                    name="userCountry"
                    btns={[
                      {
                        id: 'personal',
                        value: 'personal',
                        label: '개인정보',
                      },
                      {
                        id: 'buiness',
                        value: 'buiness',
                        label: '사업자회원',
                      },
                      {
                        id: 'foreigner',
                        value: 'foreigner',
                        label: '외국인 회원(foreigner)',
                      },
                    ]}
                  />
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>사업자 구분</td>
                <td className="businessInfo" colSpan="2">
                  <RadioBtns
                    name="userBusiness"
                    btns={[
                      {
                        id: 'companyBusiness',
                        value: 'companyBusiness',
                        label: '법인사업자',
                      },
                      {
                        id: 'personalBusiness',
                        value: 'personalBusiness',
                        label: '개인사업자',
                      },
                    ]}
                  />
                </td>
              </tr>

              <TableRows
                td="상호명"
                className="companyName"
                name="userCompanyName"
              />
              <TableRows
                td="사업자번호"
                className="tr"
                name="userBusinessNumber"
              />
              <tr className="idTr">
                <td>아이디</td>
                <td colSpan="2" tdClassName="idTd">
                  <div className="idTdContainer">
                    <Input
                      name="userId"
                      placeholder={'영소문자/숫자,4~16자'}
                      className="input"
                    />
                    <small>아이디를 입력해 주세요.</small>
                  </div>
                </td>
              </tr>
              <TableRows
                name="userPassword"
                placeholder="(영문 대소문자/숫자/특문자 중 2가지 이상 조합.8~16자)"
                td="비밀번호"
                className="tr"
              />

              <TableRows
                name="userPasswordConfirm"
                td="비밀번호 확인"
                className="tr"
              />
              <TableRows td="이름" className="tr" name="userFirstAdress" />
              <tr className="adressTr">
                <td rowSpan="3">주소</td>
                <td rowSpan="3" className="daressTd" colSpan="2">
                  <div className="innerRow innerRowColumn">
                    <Input className="input" name="userMiddleAdress" />
                    <Button content={'우편번호'} className="adressNumber" />
                  </div>
                  <Input
                    name="userSecondAdress"
                    className="input innerRowColumn"
                    placeholder="기본주소"
                  />
                  <Input className="input" name="userthirdAdress" />
                </td>
                <td></td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>

              <tr>
                <td colSpan="2">휴대폰 번호</td>
                <td>
                  <div className="innerRow">
                    <select
                      className="phoneNumberInput"
                      name="userFirstPhoneNumber"
                      id="phoneNumber"
                    >
                      <option check="true" value="010">
                        010
                      </option>
                      <option value="011">011</option>
                      <option value="016">016</option>
                      <option value="017">017</option>
                      <option value="018">018</option>
                      <option value="019">019</option>
                    </select>
                    <Input
                      name="userSecondPhoneNumber"
                      className="input phoneNumberInput"
                    />
                    <Input
                      name="userThirdPhoneNumber"
                      className="input phoneNumberInput"
                    />
                  </div>
                </td>
              </tr>
              <TableRows td="이메일" className="tr" name="userEmail" />
            </tbody>
          </table>
          <h1 className="signUpSubTitle">추가정보</h1>
          {/* <table>
            <TableRows td="생년월일" />
          </table> */}
          <h1 className="signUpSubTitle">전체동의</h1>
          {/* <table>
            <thead>
              <Input type="checkBox" id="agreeBox" name="agreeBox" />
              <label htmlFor="agreeBox">
                이용약관 및 개인정보 수집 및 이용, 쇼핑정보 수신(선택에 모두
                동의합니다.
              </label>
            </thead>
            <tr>
              <Input type="checkBox" id="allAgreeBox" name="allAgreeBox" />
              <label htmlFor="allAgreeBox">[필수] 이용약관 동의</label>
            </tr>
            <tr>
              <Input type="checkBox" id="personalAgree" name="personalAgree" />
              <label htmlFor="personalAgree">
                [필수] 개인정보 수집 및 이용 동의
              </label>
            </tr>
            <tr>
              <td>
                <Input type="checkBox" id="SMSArgree" name="SMSArgree" />
                <label htmlFor="SMSArgree">
                  [선택] SMS 수신을 동의하십니까
                </label>
              </td>
              <td>
                <Input type="checkBox" id="emailAgree" name="emailAgree" />
                <label htmlFor="emailAgree">
                  [선택] 이메일 수신을 동의하십니까?
                </label>
              </td>
            </tr>
          </table> */}
        </div>
      </div>
    );
  }
}

export default SignUp;
