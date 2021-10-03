import React from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import RadioBtns from './components/RadioBtns/RadioBtns';
import TableRows from './components/TableRows/TableRows';
import './SignUp.scss';

class SignUp extends React.Component {
  bi;

  constructor() {
    this.func = this.func.bind(this);
  }
  render() {
    return (
      <div className="SignUp">
        <div className="signUpWrapper">
          <h1 className="signUpTitle">회원가입</h1>

          <table className="basicInfo">
            <thead>
              <tr>
                <td>기본정보</td>
                <td colSpan="2">
                  <div className="radioButtons">
                    <RadioBtns
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
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              <TableRows
                placeholder="영소문자/숫자,4~16자"
                td="아이디"
                className="tr"
              />
              <TableRows
                placeholder="(영문 대소문자/숫자/특문자 중 2가지 이상 조합.8~16자)"
                td="비밀번호"
                className="tr"
              />
              <TableRows td="비밀번호 확인" className="tr" />
              <TableRows td="이름" className="tr" />
              <tr>
                <td rowSpan="3">주소</td>
                <td rowSpan="3" colSpan="2">
                  <div className="innerRow">
                    <Input />
                    <Button content={'우편번호'} />
                  </div>
                  <div>
                    <Input placeholder="기본주소" />
                  </div>
                  <Input />{' '}
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
                    <td colSpan="2">
                      <select name="phoneNumber" id="phoneNumber">
                        <option check value="010">
                          010
                        </option>
                        <option value="011">011</option>
                        <option value="016">016</option>
                        <option value="017">017</option>
                        <option value="018">018</option>
                        <option value="019">019</option>
                      </select>
                      - <Input /> - <Input />
                    </td>
                  </div>
                </td>
              </tr>
              <TableRows td="이메일" className="tr" />
            </tbody>
          </table>
          <h1 className="signUpTitle">추가정보</h1>
          <table>
            <TableRows td="생년월일" />
          </table>
          <h1 className="signUpTitle">전체동의</h1>
          <table>
            <thead>
              <Input type="checkBox" id="agreeBox" name="agreeBox" />
              <label for="agreeBox">
                이용약관 및 개인정보 수집 및 이용, 쇼핑정보 수신(선택에 모두
                동의합니다.
              </label>
            </thead>
            <tr>
              <Input type="checkBox" id="allAgreeBox" name="allAgreeBox" />
              <label for="allAgreeBox">[필수] 이용약관 동의</label>
            </tr>
            <tr>
              <Input type="checkBox" id="personalAgree" name="personalAgree" />
              <label for="personalAgree">
                [필수] 개인정보 수집 및 이용 동의
              </label>
            </tr>
            <tr>
              <td>
                <Input type="checkBox" id="SMSArgree" name="SMSArgree" />
                <label for="SMSArgree">[선택] SMS 수신을 동의하십니까</label>
              </td>
              <td>
                <Input type="checkBox" id="emailAgree" name="emailAgree" />
                <label for="emailAgree">
                  [선택] 이메일 수신을 동의하십니까?
                </label>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default SignUp;

// <td>휴대전화</td>
// <div className="innerRow">
//   <td colSpan="2">
//     <select name="phoneNumber" id="phoneNumber">
//       <option check value="010">
//         010
//       </option>
//       <option value="011">011</option>
//       <option value="016">016</option>
//       <option value="017">017</option>
//       <option value="018">018</option>
//       <option value="019">019</option>
//     </select>
//     -
//     <Input />-
//     <Input />
//   </td>
// </div>
