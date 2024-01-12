export const LOGO =
    'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const LOG_IN_IMAGE =
    'https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg';
export const USER_LOGO =
    'https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABVB2PLirdQh_1yd9FQBW3HBGcUmWVlTDrUt5l1W_lqDJ33Sl-F6vY8O2X_URorArVYCkG0SnXjA6LXqHBLFVMg_DMtx19TA.png?r=cf8';

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_API_KEY
    }
};

export const IMAGE_CDN_URL = 'https://image.tmdb.org/t/p/w780';
