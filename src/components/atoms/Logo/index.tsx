import style from "./style.module.css";

// interface LogoProps {
//   children:  React.ReactNode,
// }

function Logo() {
  // return ( <a  className={style.logo} href="#">{children}</a> );
  return (
    <a className={style.logo} href="#">
      <svg
        width="161"
        height="31"
        viewBox="0 0 161 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.63 16.41V12.51H22.25C22.35 14.19 22.18 15.76 21.74 17.22C21.3 18.68 20.62 19.97 19.7 21.09C18.78 22.21 17.63 23.09 16.25 23.73C14.87 24.35 13.29 24.66 11.51 24.66C9.83 24.66 8.29 24.4 6.89 23.88C5.49 23.34 4.28 22.58 3.26 21.6C2.24 20.6 1.44 19.42 0.86 18.06C0.3 16.68 0.0200001 15.16 0.0200001 13.5C0.0200001 11.84 0.31 10.34 0.89 9C1.47 7.64 2.29 6.48 3.35 5.52C4.41 4.56 5.65 3.82 7.07 3.3C8.49 2.78 10.03 2.52 11.69 2.52C13.17 2.52 14.5 2.73 15.68 3.15C16.86 3.57 17.9 4.16 18.8 4.92C19.72 5.66 20.51 6.52 21.17 7.5L16.67 9.84C16.19 9 15.54 8.31 14.72 7.77C13.92 7.21 12.91 6.93 11.69 6.93C10.53 6.93 9.46 7.19 8.48 7.71C7.52 8.23 6.75 8.98 6.17 9.96C5.61 10.92 5.33 12.1 5.33 13.5C5.33 14.88 5.6 16.08 6.14 17.1C6.7 18.1 7.45 18.88 8.39 19.44C9.35 19.98 10.45 20.25 11.69 20.25C12.45 20.25 13.14 20.16 13.76 19.98C14.38 19.78 14.91 19.51 15.35 19.17C15.79 18.81 16.16 18.4 16.46 17.94C16.78 17.46 17.03 16.95 17.21 16.41H11.63ZM24.3936 17.1C24.3936 15.64 24.7336 14.37 25.4136 13.29C26.0936 12.21 27.0336 11.37 28.2336 10.77C29.4336 10.17 30.7836 9.87 32.2836 9.87C33.7836 9.87 35.1236 10.17 36.3036 10.77C37.5036 11.37 38.4436 12.21 39.1236 13.29C39.8236 14.37 40.1736 15.64 40.1736 17.1C40.1736 18.54 39.8236 19.8 39.1236 20.88C38.4436 21.96 37.5036 22.8 36.3036 23.4C35.1236 24 33.7836 24.3 32.2836 24.3C30.7836 24.3 29.4336 24 28.2336 23.4C27.0336 22.8 26.0936 21.96 25.4136 20.88C24.7336 19.8 24.3936 18.54 24.3936 17.1ZM29.0436 17.1C29.0436 17.82 29.1936 18.44 29.4936 18.96C29.7936 19.46 30.1836 19.85 30.6636 20.13C31.1436 20.41 31.6836 20.55 32.2836 20.55C32.8636 20.55 33.3936 20.41 33.8736 20.13C34.3736 19.85 34.7636 19.46 35.0436 18.96C35.3436 18.44 35.4936 17.82 35.4936 17.1C35.4936 16.38 35.3436 15.76 35.0436 15.24C34.7636 14.72 34.3736 14.32 33.8736 14.04C33.3936 13.76 32.8636 13.62 32.2836 13.62C31.6836 13.62 31.1436 13.76 30.6636 14.04C30.1836 14.32 29.7936 14.72 29.4936 15.24C29.1936 15.76 29.0436 16.38 29.0436 17.1ZM42.0889 17.1C42.0889 15.64 42.4289 14.37 43.1089 13.29C43.7889 12.21 44.7289 11.37 45.9289 10.77C47.1289 10.17 48.4789 9.87 49.9789 9.87C51.4789 9.87 52.8189 10.17 53.9989 10.77C55.1989 11.37 56.1389 12.21 56.8189 13.29C57.5189 14.37 57.8689 15.64 57.8689 17.1C57.8689 18.54 57.5189 19.8 56.8189 20.88C56.1389 21.96 55.1989 22.8 53.9989 23.4C52.8189 24 51.4789 24.3 49.9789 24.3C48.4789 24.3 47.1289 24 45.9289 23.4C44.7289 22.8 43.7889 21.96 43.1089 20.88C42.4289 19.8 42.0889 18.54 42.0889 17.1ZM46.7389 17.1C46.7389 17.82 46.8889 18.44 47.1889 18.96C47.4889 19.46 47.8789 19.85 48.3589 20.13C48.8389 20.41 49.3789 20.55 49.9789 20.55C50.5589 20.55 51.0889 20.41 51.5689 20.13C52.0689 19.85 52.4589 19.46 52.7389 18.96C53.0389 18.44 53.1889 17.82 53.1889 17.1C53.1889 16.38 53.0389 15.76 52.7389 15.24C52.4589 14.72 52.0689 14.32 51.5689 14.04C51.0889 13.76 50.5589 13.62 49.9789 13.62C49.3789 13.62 48.8389 13.76 48.3589 14.04C47.8789 14.32 47.4889 14.72 47.1889 15.24C46.8889 15.76 46.7389 16.38 46.7389 17.1ZM71.0642 0.599999H75.5942V24H71.0642V0.599999ZM59.7842 17.1C59.7842 15.54 60.0942 14.23 60.7142 13.17C61.3542 12.11 62.1742 11.3 63.1742 10.74C64.1742 10.18 65.2342 9.9 66.3542 9.9C67.5142 9.9 68.5342 10.19 69.4142 10.77C70.3142 11.35 71.0242 12.18 71.5442 13.26C72.0642 14.32 72.3242 15.6 72.3242 17.1C72.3242 18.58 72.0642 19.86 71.5442 20.94C71.0242 22.02 70.3142 22.85 69.4142 23.43C68.5342 24.01 67.5142 24.3 66.3542 24.3C65.2342 24.3 64.1742 24.02 63.1742 23.46C62.1742 22.9 61.3542 22.09 60.7142 21.03C60.0942 19.95 59.7842 18.64 59.7842 17.1ZM64.5542 17.1C64.5542 17.82 64.7042 18.45 65.0042 18.99C65.3042 19.51 65.7042 19.92 66.2042 20.22C66.7042 20.5 67.2542 20.64 67.8542 20.64C68.3742 20.64 68.8742 20.5 69.3542 20.22C69.8542 19.94 70.2642 19.54 70.5842 19.02C70.9042 18.48 71.0642 17.84 71.0642 17.1C71.0642 16.36 70.9042 15.73 70.5842 15.21C70.2642 14.67 69.8542 14.26 69.3542 13.98C68.8742 13.7 68.3742 13.56 67.8542 13.56C67.2542 13.56 66.7042 13.71 66.2042 14.01C65.7042 14.29 65.3042 14.7 65.0042 15.24C64.7042 15.76 64.5542 16.38 64.5542 17.1ZM79.8598 18.99C80.5598 19.57 81.1898 20.03 81.7498 20.37C82.3298 20.69 82.8398 20.92 83.2798 21.06C83.7198 21.18 84.0998 21.24 84.4198 21.24C84.8798 21.24 85.2198 21.14 85.4398 20.94C85.6598 20.74 85.7698 20.48 85.7698 20.16C85.7698 19.86 85.6798 19.61 85.4998 19.41C85.3198 19.19 85.0098 18.98 84.5698 18.78C84.1498 18.58 83.5698 18.37 82.8298 18.15C82.1698 17.91 81.5398 17.63 80.9398 17.31C80.3598 16.97 79.8798 16.52 79.4998 15.96C79.1198 15.4 78.9298 14.68 78.9298 13.8C78.9298 12.96 79.1498 12.25 79.5898 11.67C80.0498 11.09 80.6598 10.65 81.4198 10.35C82.1998 10.05 83.0898 9.9 84.0898 9.9C84.8898 9.9 85.6298 9.99 86.3098 10.17C87.0098 10.35 87.6598 10.59 88.2598 10.89C88.8798 11.19 89.4598 11.54 89.9998 11.94L88.3798 14.88C87.7998 14.34 87.1398 13.9 86.3998 13.56C85.6598 13.2 84.9798 13.02 84.3598 13.02C83.9398 13.02 83.6198 13.1 83.3998 13.26C83.1998 13.42 83.0998 13.63 83.0998 13.89C83.0998 14.19 83.2198 14.44 83.4598 14.64C83.7198 14.84 84.0798 15.03 84.5398 15.21C85.0198 15.37 85.5998 15.58 86.2798 15.84C86.9998 16.1 87.6598 16.4 88.2598 16.74C88.8798 17.08 89.3698 17.51 89.7298 18.03C90.1098 18.55 90.2998 19.24 90.2998 20.1C90.2998 21.58 89.8398 22.7 88.9198 23.46C88.0198 24.2 86.7498 24.57 85.1098 24.57C84.1098 24.57 83.1798 24.45 82.3198 24.21C81.4798 23.99 80.6998 23.69 79.9798 23.31C79.2598 22.91 78.5898 22.47 77.9698 21.99L79.8598 18.99ZM91.4415 20.28L103.621 3H107.401V24H102.121V18.72L102.691 18.39V10.35L98.1615 16.62H105.901L106.411 15.96H110.701V20.28H91.4415ZM127.869 10.2L118.869 30.6H114.309L117.669 22.89L111.699 10.2H116.679L121.149 21.27L118.809 21.24L123.219 10.2H127.869ZM128.134 17.1C128.134 15.64 128.474 14.37 129.154 13.29C129.834 12.21 130.774 11.37 131.974 10.77C133.174 10.17 134.524 9.87 136.024 9.87C137.524 9.87 138.864 10.17 140.044 10.77C141.244 11.37 142.184 12.21 142.864 13.29C143.564 14.37 143.914 15.64 143.914 17.1C143.914 18.54 143.564 19.8 142.864 20.88C142.184 21.96 141.244 22.8 140.044 23.4C138.864 24 137.524 24.3 136.024 24.3C134.524 24.3 133.174 24 131.974 23.4C130.774 22.8 129.834 21.96 129.154 20.88C128.474 19.8 128.134 18.54 128.134 17.1ZM132.784 17.1C132.784 17.82 132.934 18.44 133.234 18.96C133.534 19.46 133.924 19.85 134.404 20.13C134.884 20.41 135.424 20.55 136.024 20.55C136.604 20.55 137.134 20.41 137.614 20.13C138.114 19.85 138.504 19.46 138.784 18.96C139.084 18.44 139.234 17.82 139.234 17.1C139.234 16.38 139.084 15.76 138.784 15.24C138.504 14.72 138.114 14.32 137.614 14.04C137.134 13.76 136.604 13.62 136.024 13.62C135.424 13.62 134.884 13.76 134.404 14.04C133.924 14.32 133.534 14.72 133.234 15.24C132.934 15.76 132.784 16.38 132.784 17.1ZM151.379 18.6C151.379 19.4 151.529 20.03 151.829 20.49C152.129 20.93 152.649 21.15 153.389 21.15C153.889 21.15 154.309 21.05 154.649 20.85C155.009 20.65 155.289 20.36 155.489 19.98C155.689 19.6 155.789 19.14 155.789 18.6V10.2H160.319V24H155.789V21.93C155.369 22.67 154.819 23.26 154.139 23.7C153.459 24.12 152.609 24.33 151.589 24.33C149.869 24.33 148.609 23.87 147.809 22.95C147.029 22.01 146.639 20.72 146.639 19.08V10.2H151.379V18.6Z"
          fill="white"
        />
      </svg>
    </a>
  );
}

export default Logo;
