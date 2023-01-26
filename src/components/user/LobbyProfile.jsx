import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Avatar from '../common/Avatar';
import userAPI from '../../api/user';
import { setUserInfo } from '../../app/slices/userSlice';
import { delCookie } from '../../utils/cookie';
import { toast } from '../toast/ToastProvider';

function LobbyProfile() {
  const { profileImage, nickname } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserInfo = () => {
    userAPI
      .getUserInfo()
      .then((res) => {
        if (res.data.statusCode === 200) {
          const { id, nickname, imgUrl } = res.data.data;
          const payload = {
            profileImage: imgUrl,
            userId: id,
            nickname,
          };
          dispatch(setUserInfo(payload));
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        navigate('/login');
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <ProfileBox>
      <Avatar src={profileImage} width="80px" height="80px" />
      <Nickname>{nickname ?? '로그인이 필요합니다'}</Nickname>
    </ProfileBox>
  );
}

const ProfileBox = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
`;

const Nickname = styled.h3`
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.DARK_LAVA};
  margin: 10px 0 20px 0;
`;

export default LobbyProfile;
