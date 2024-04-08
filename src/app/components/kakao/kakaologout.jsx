const KAKAO_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function KakaoLogout() {
  const handleLogout = () => {
    localStorage.removeItem("access_token");
  };

  const logoutParam = new URLSearchParams({
    client_id: KAKAO_API_KEY || " ",
    logout_redirect_uri: "http://localhost:3000",
  });

  return (
    <a
      href={`https://kauth.kakao.com/oauth/logout?${logoutParam.toString()} `}
      onClick={handleLogout}
    >
      로그아웃
    </a>
  );
}
