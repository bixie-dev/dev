/* eslint-disable */
import { DashCount, DashLoc } from "../components/Dashboard";
import Logo from "../logo/logo";

const Dashboard = () => {
  return (
    <div className="p-4 mx-8">
      <div className="pl-4 flex items-center">
        <Logo />
        <div className="mb-6 flex gap-4">
          <button className="w-[50px] h-[50px] rounded-lg bg-[#4269E1] flex items-center justify-center">
            <svg width="25" height="25" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8433 22.8515C21.1838 22.2123 19.3619 21.875 17.505 21.875C14.7517 21.875 12.0754 22.6165 9.89105 23.9845C8.05855 25.1322 6.65825 26.667 5.83395 28.4132C5.58102 28.9491 5.92694 29.5512 6.50577 29.6778L8.95914 30.2144C13.5269 31.2133 18.226 31.4019 22.8433 30.7801V29.25H20.2845C18.6276 29.25 17.2845 27.9069 17.2845 26.25C17.2845 24.5931 18.6276 23.25 20.2845 23.25L22.8433 23.25V22.8515ZM28.8433 29.5346C28.9571 29.4588 29.0519 29.3613 29.1222 29.25H28.8433V29.5346Z" fill="white" />
              <path d="M25.8438 20.4167L25.8438 32.0834" stroke="white" stroke-width="2.5" stroke-linecap="round" />
              <path d="M31.4023 26.25L20.2847 26.25" stroke="white" stroke-width="2.5" stroke-linecap="round" />
              <ellipse cx="17.5032" cy="11.6667" rx="6.94853" ry="7.29167" fill="white" />
            </svg>
          </button>
          <button className="w-[50px] h-[50px] rounded-lg bg-[#4269E1] flex items-center justify-center">
            <svg width="25" height="25" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5014 5.83325L7.77344 10.2083L17.5014 14.5833L27.2293 10.2083L17.5014 5.83325Z" stroke="white" stroke-width="2" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.223 14.4024L7.36327 16.588C7.00431 16.7494 6.77344 17.1064 6.77344 17.5C6.77344 17.8936 7.00431 18.2506 7.36327 18.412L17.0912 22.787C17.3521 22.9043 17.6507 22.9043 17.9115 22.787L27.6395 18.412C27.9984 18.2506 28.2293 17.8936 28.2293 17.5C28.2293 17.1064 27.9984 16.7494 27.6395 16.588L22.7798 14.4024L20.3417 15.4989L24.7913 17.5L17.5014 20.7785L10.2115 17.5L14.661 15.4989L12.223 14.4024ZM17.0991 12.2095C17.3555 12.0968 17.6473 12.0968 17.9036 12.2095L17.5014 12.3904L17.0991 12.2095Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.223 21.6942L7.36327 23.8797C7.00431 24.0412 6.77344 24.3982 6.77344 24.7917C6.77344 25.1853 7.00431 25.5423 7.36327 25.7038L17.0912 30.0788C17.3521 30.1961 17.6507 30.1961 17.9115 30.0788L27.6395 25.7038C27.9984 25.5423 28.2293 25.1853 28.2293 24.7917C28.2293 24.3982 27.9984 24.0412 27.6395 23.8797L22.7798 21.6942L20.3417 22.7906L24.7913 24.7917L17.5014 28.0703L10.2115 24.7917L14.661 22.7906L12.223 21.6942ZM17.0991 19.5012C17.3555 19.3886 17.6473 19.3886 17.9036 19.5012L17.5014 19.6821L17.0991 19.5012Z" fill="white" />
            </svg>
          </button>
          <button className="w-[50px] h-[50px] rounded-lg bg-[#4269E1] flex items-center justify-center">
            <svg width="25" height="25" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.2148 9.75H32.1648C33.845 9.75 34.6851 9.75 35.3268 10.077C35.8913 10.3646 36.3502 10.8235 36.6379 11.388C36.9648 12.0298 36.9648 12.8698 36.9648 14.55V31.625C36.9648 31.9732 36.9648 32.1473 36.954 32.2943C36.8082 34.2713 35.2362 35.8433 33.2591 35.9892C33.1122 36 32.9381 36 32.5898 36V36C32.2416 36 32.0675 36 31.9206 35.9892C29.9435 35.8433 28.3715 34.2713 28.2257 32.2943C28.2148 32.1473 28.2148 31.9732 28.2148 31.625V4.2C28.2148 3.0799 28.2148 2.51984 27.9969 2.09202C27.8051 1.71569 27.4991 1.40973 27.1228 1.21799C26.695 1 26.1349 1 25.0148 1H5.16484C4.04474 1 3.48469 1 3.05686 1.21799C2.68054 1.40973 2.37458 1.71569 2.18283 2.09202C1.96484 2.51984 1.96484 3.07989 1.96484 4.2V32.8C1.96484 33.9201 1.96484 34.4802 2.18283 34.908C2.37458 35.2843 2.68054 35.5903 3.05686 35.782C3.48469 36 4.04474 36 5.16484 36H32.5898" stroke="white" stroke-width="2" />
              <path d="M17.9648 10H9.96484V18H17.9648V10Z" stroke="white" stroke-width="2" stroke-linejoin="round" />
              <path d="M9.96484 22H17.9648" stroke="white" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
          <button className="w-[50px] h-[50px] rounded-lg bg-[#4269E1] flex items-center justify-center">
            <svg width="25" height="25" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.625 29.1895H4.375" stroke="white" stroke-width="3" stroke-linecap="round" />
              <path d="M5.83203 22.2397V19.4597" stroke="white" stroke-width="3" stroke-linecap="round" />
              <path d="M17.5 16.6797V12.5098" stroke="white" stroke-width="3" stroke-linecap="round" />
              <path d="M11.668 22.2395V13.8997" stroke="white" stroke-width="3" stroke-linecap="round" />
              <path d="M23.332 18.0697V15.2898" stroke="white" stroke-width="3" stroke-linecap="round" />
              <path d="M29.168 20.8497V6.94995" stroke="white" stroke-width="3" stroke-linecap="round" />
            </svg>
          </button>
          <button className="w-[50px] h-[50px] rounded-lg bg-[#4269E1] flex items-center justify-center">
            <svg width="25" height="25" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="23.332" y="13.125" width="5.83333" height="5.83333" rx="2.91667" transform="rotate(90 23.332 13.125)" stroke="white" stroke-width="2" />
              <rect x="29.168" y="24.7917" width="5.83333" height="5.83333" rx="2.91667" transform="rotate(90 29.168 24.7917)" stroke="white" stroke-width="2" />
              <path d="M7.29297 5.83325V23.7083C7.29297 25.5939 7.29297 26.5367 7.87876 27.1225C8.46454 27.7083 9.40735 27.7083 11.293 27.7083H23.3346" stroke="white" stroke-width="2" />
              <path d="M7.29297 10.2083V12.0416C7.29297 13.9272 7.29297 14.87 7.87876 15.4558C8.46454 16.0416 9.40735 16.0416 11.293 16.0416H17.5013" stroke="white" stroke-width="2" />
            </svg>
          </button>
          <button className="w-[50px] h-[50px] rounded-lg bg-[#4269E1] flex items-center justify-center">
            <svg width="25" height="25" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.5981 4.71774L21.5931 4.61824V4.61824L20.5981 4.71774ZM20.184 3.1753L20.855 2.43384L20.855 2.43384L20.184 3.1753ZM20.6545 5.28208L19.6595 5.38158V5.38158L20.6545 5.28208ZM21.4523 7.96137L21.835 7.03749L21.4523 7.96137ZM23.9111 6.63099L24.5443 7.40494L24.5443 7.40494L23.9111 6.63099ZM24.35 6.27187L23.7167 5.49791L23.7167 5.49791L24.35 6.27187ZM25.7334 5.47399L25.7833 4.47523L25.7334 5.47399ZM27.0307 6.40557L26.3236 7.11267L27.0307 6.40557ZM28.5958 7.97066L27.8887 8.67777H27.8887L28.5958 7.97066ZM28.7295 10.6514L27.9555 10.0181H27.9555L28.7295 10.6514ZM28.3703 11.0903L29.1443 11.7236H29.1443L28.3703 11.0903ZM27.0399 13.549L27.9638 13.1663L27.9638 13.1663L27.0399 13.549ZM29.7192 14.3469L29.6197 15.3419H29.6197L29.7192 14.3469ZM30.2836 14.4033L30.3831 13.4083H30.3831L30.2836 14.4033ZM31.8261 14.8174L31.0846 15.4884L31.0846 15.4884L31.8261 14.8174ZM31.8261 20.1828L31.0846 19.5118L31.8261 20.1828ZM30.2836 20.5968L30.3831 21.5919H30.3831L30.2836 20.5968ZM29.7198 20.6532L29.6203 19.6582L29.7198 20.6532ZM27.0405 21.4511L26.1166 21.0684V21.0684L27.0405 21.4511ZM28.3709 23.9098L29.1448 23.2765L29.1448 23.2765L28.3709 23.9098ZM28.7295 24.3482L27.9556 24.9814L27.9556 24.9814L28.7295 24.3482ZM29.5274 25.7316L30.5262 25.7814L29.5274 25.7316ZM25.7335 29.5255L25.7833 30.5243L25.7335 29.5255ZM24.35 28.7277L23.7168 29.5016H23.7168L24.35 28.7277ZM23.9111 28.3685L24.5444 27.5946L24.5444 27.5946L23.9111 28.3685ZM21.4524 27.0381L21.0697 26.1143H21.0697L21.4524 27.0381ZM20.6546 29.7174L21.6496 29.8169V29.8169L20.6546 29.7174ZM20.5981 30.2824L19.603 30.1829V30.1829L20.5981 30.2824ZM20.184 31.8249L19.513 31.0834L20.184 31.8249ZM14.8186 31.8249L15.4896 31.0834L15.4896 31.0834L14.8186 31.8249ZM14.4045 30.2824L15.3996 30.1829V30.1829L14.4045 30.2824ZM14.3481 29.718L13.3531 29.8175L14.3481 29.718ZM11.0915 28.3691L11.7248 29.1431L11.0915 28.3691ZM10.6525 28.7283L11.2857 29.5023V29.5023L10.6525 28.7283ZM9.26903 29.5262L9.21922 30.5249L9.26903 29.5262ZM7.97182 28.5946L8.67892 27.8875L7.97182 28.5946ZM6.40672 27.0295L5.69961 27.7366L5.69961 27.7366L6.40672 27.0295ZM5.47515 25.7323L4.47639 25.7821L5.47515 25.7323ZM6.27302 24.3488L7.04698 24.9821H7.04698L6.27302 24.3488ZM6.6322 23.9098L7.40615 24.5431L6.6322 23.9098ZM7.96258 21.4511L8.88646 21.0684L7.96258 21.4511ZM5.28329 20.6533L5.18378 21.6483H5.18379L5.28329 20.6533ZM4.71896 20.5968L4.61946 21.5919H4.61946L4.71896 20.5968ZM3.17652 20.1828L2.43506 20.8538L2.43507 20.8538L3.17652 20.1828ZM3.17652 14.8174L2.43506 14.1464L2.43506 14.1464L3.17652 14.8174ZM4.71896 14.4033L4.61946 13.4083H4.61946L4.71896 14.4033ZM5.28384 14.3468L5.38334 15.3419H5.38334L5.28384 14.3468ZM7.96313 13.549L7.03925 13.1663V13.1663L7.96313 13.549ZM6.63274 11.0903L7.4067 10.457L7.4067 10.457L6.63274 11.0903ZM6.27308 10.6507L5.49913 11.2839H5.49913L6.27308 10.6507ZM6.40679 7.97L5.69968 7.2629V7.2629L6.40679 7.97ZM7.97188 6.40491L8.67899 7.11201H8.67899L7.97188 6.40491ZM9.2691 5.47333L9.21929 4.47457L9.2691 5.47333ZM10.6526 6.2712L10.0193 7.04516L10.6526 6.2712ZM11.0916 6.63041L11.7248 5.85646V5.85646L11.0916 6.63041ZM13.5503 7.9608L13.1676 7.03692H13.1676L13.5503 7.9608ZM14.3482 5.28151L15.3432 5.38101V5.38101L14.3482 5.28151ZM14.4045 4.71774L13.4095 4.61823V4.61824L14.4045 4.71774ZM14.8186 3.1753L14.1476 2.43384L14.1476 2.43384L14.8186 3.1753ZM21.5931 4.61824C21.553 4.21687 21.5153 3.82024 21.4402 3.49662C21.3587 3.14519 21.2074 2.75281 20.855 2.43384L19.513 3.91675C19.4462 3.85633 19.4592 3.80721 19.4919 3.94838C19.5311 4.11736 19.5576 4.36268 19.603 4.81725L21.5931 4.61824ZM21.6495 5.18258L21.5931 4.61824L19.603 4.81724L19.6595 5.38158L21.6495 5.18258ZM21.835 7.03749C22.0089 7.10952 21.9644 7.25113 21.8772 6.90446C21.7896 6.55637 21.7346 6.03315 21.6495 5.18258L19.6595 5.38158C19.7378 6.16455 19.8053 6.86648 19.9376 7.39241C20.0703 7.91975 20.343 8.58424 21.0697 8.88525L21.835 7.03749ZM23.2778 5.85703C22.6162 6.39833 22.2074 6.72942 21.8993 6.91363C21.5925 7.0971 21.6611 6.96546 21.835 7.03749L21.0697 8.88525C21.7964 9.18626 22.4591 8.90922 22.9258 8.63014C23.3912 8.35181 23.9353 7.90322 24.5443 7.40494L23.2778 5.85703ZM23.7167 5.49791L23.2778 5.85703L24.5443 7.40494L24.9832 7.04582L23.7167 5.49791ZM25.7833 4.47523C25.3085 4.45155 24.9241 4.62203 24.6179 4.81291C24.336 4.98869 24.0289 5.24248 23.7167 5.49791L24.9832 7.04582C25.3368 6.75654 25.529 6.6018 25.6762 6.51002C25.7991 6.43334 25.7736 6.47723 25.6836 6.47275L25.7833 4.47523ZM27.7378 5.69846C27.4525 5.41324 27.1722 5.13014 26.9092 4.92719C26.6236 4.7068 26.258 4.49891 25.7833 4.47523L25.6836 6.47275C25.5937 6.46826 25.5726 6.42204 25.6874 6.51057C25.8247 6.61654 26.0005 6.78964 26.3236 7.11267L27.7378 5.69846ZM29.3029 7.26356L27.7378 5.69846L26.3236 7.11267L27.8887 8.67777L29.3029 7.26356ZM30.5261 9.21807C30.5024 8.74331 30.2945 8.37774 30.0741 8.09213C29.8712 7.82913 29.5881 7.54878 29.3029 7.26356L27.8887 8.67777C28.2117 9.0008 28.3848 9.17665 28.4908 9.31398C28.5793 9.4287 28.5331 9.40762 28.5286 9.31769L30.5261 9.21807ZM29.5034 11.2846C29.7589 10.9724 30.0126 10.6653 30.1884 10.3834C30.3793 10.0773 30.5498 9.69282 30.5261 9.21807L28.5286 9.31769C28.5241 9.22777 28.568 9.20219 28.4913 9.32516C28.3995 9.47235 28.2448 9.66455 27.9555 10.0181L29.5034 11.2846ZM29.1443 11.7236L29.5034 11.2846L27.9555 10.0181L27.5963 10.4571L29.1443 11.7236ZM27.9638 13.1663C28.0358 13.3402 27.9042 13.4089 28.0877 13.1021C28.2719 12.794 28.603 12.3852 29.1443 11.7236L27.5964 10.4571C27.0981 11.0661 26.6495 11.6102 26.3712 12.0756C26.0921 12.5423 25.815 13.205 26.1161 13.9317L27.9638 13.1663ZM29.8187 13.3518C28.9681 13.2668 28.4449 13.2118 28.0968 13.1242C27.7502 13.037 27.8918 12.9925 27.9638 13.1663L26.116 13.9317C26.4171 14.6584 27.0815 14.9311 27.6089 15.0638C28.1348 15.1961 28.8367 15.2636 29.6197 15.3419L29.8187 13.3518ZM30.3831 13.4083L29.8187 13.3518L29.6197 15.3419L30.1841 15.3984L30.3831 13.4083ZM32.5675 14.1464C32.2486 13.7939 31.8562 13.6426 31.5048 13.5612C31.1811 13.4861 30.7845 13.4484 30.3831 13.4083L30.1841 15.3984C30.6387 15.4438 30.884 15.4703 31.053 15.5095C31.1942 15.5422 31.145 15.5552 31.0846 15.4884L32.5675 14.1464ZM33.0846 16.3934C33.0846 15.99 33.0866 15.5916 33.0441 15.2621C32.998 14.9043 32.8865 14.4988 32.5675 14.1464L31.0846 15.4884C31.0242 15.4216 31.042 15.3741 31.0605 15.5178C31.0827 15.6898 31.0846 15.9366 31.0846 16.3934H33.0846ZM33.0846 18.6068V16.3934H31.0846V18.6068H33.0846ZM32.5675 20.8538C32.8865 20.5013 32.998 20.0958 33.0441 19.738C33.0866 19.4085 33.0846 19.0101 33.0846 18.6068H31.0846C31.0846 19.0636 31.0827 19.3103 31.0605 19.4824C31.042 19.6261 31.0242 19.5785 31.0846 19.5118L32.5675 20.8538ZM30.3831 21.5919C30.7845 21.5517 31.1811 21.514 31.5048 21.439C31.8562 21.3575 32.2486 21.2062 32.5675 20.8538L31.0846 19.5118C31.145 19.445 31.1942 19.458 31.053 19.4907C30.884 19.5299 30.6387 19.5564 30.1841 19.6018L30.3831 21.5919ZM29.8193 21.6483L30.3831 21.5919L30.1841 19.6018L29.6203 19.6582L29.8193 21.6483ZM27.9644 21.8338C27.8923 22.0077 27.7507 21.9631 28.0974 21.8759C28.4455 21.7883 28.9687 21.7333 29.8193 21.6483L29.6203 19.6582C28.8373 19.7365 28.1354 19.804 27.6094 19.9363C27.0821 20.069 26.4176 20.3417 26.1166 21.0684L27.9644 21.8338ZM29.1448 23.2765C28.6035 22.615 28.2724 22.2061 28.0882 21.898C27.9048 21.5912 28.0364 21.6599 27.9644 21.8338L26.1166 21.0684C25.8156 21.7951 26.0926 22.4578 26.3717 22.9245C26.65 23.3899 27.0986 23.934 27.5969 24.543L29.1448 23.2765ZM29.5035 23.7149L29.1448 23.2765L27.5969 24.543L27.9556 24.9814L29.5035 23.7149ZM30.5262 25.7814C30.5498 25.3067 30.3794 24.9223 30.1885 24.6161C30.0127 24.3342 29.7589 24.0271 29.5035 23.7149L27.9556 24.9814C28.2449 25.335 28.3996 25.5272 28.4914 25.6744C28.5681 25.7973 28.5242 25.7717 28.5286 25.6818L30.5262 25.7814ZM29.3029 27.736C29.5882 27.4507 29.8713 27.1704 30.0742 26.9074C30.2946 26.6218 30.5025 26.2562 30.5262 25.7814L28.5286 25.6818C28.5331 25.5919 28.5794 25.5708 28.4908 25.6855C28.3849 25.8229 28.2118 25.9987 27.8887 26.3217L29.3029 27.736ZM27.7378 29.3011L29.3029 27.736L27.8887 26.3217L26.3236 27.8868L27.7378 29.3011ZM25.7833 30.5243C26.2581 30.5006 26.6237 30.2927 26.9093 30.0723C27.1723 29.8694 27.4526 29.5863 27.7378 29.3011L26.3236 27.8868C26.0006 28.2099 25.8247 28.383 25.6874 28.4889C25.5727 28.5775 25.5938 28.5312 25.6837 28.5268L25.7833 30.5243ZM23.7168 29.5016C24.029 29.757 24.3361 30.0108 24.618 30.1866C24.9241 30.3775 25.3086 30.548 25.7833 30.5243L25.6837 28.5268C25.7736 28.5223 25.7992 28.5662 25.6762 28.4895C25.529 28.3977 25.3369 28.243 24.9833 27.9537L23.7168 29.5016ZM23.2779 29.1425L23.7168 29.5016L24.9833 27.9537L24.5444 27.5946L23.2779 29.1425ZM21.8351 27.962C21.6612 28.0341 21.5926 27.9024 21.8994 28.0859C22.2074 28.2701 22.6163 28.6012 23.2779 29.1425L24.5444 27.5946C23.9353 27.0963 23.3913 26.6477 22.9258 26.3694C22.4591 26.0903 21.7964 25.8133 21.0697 26.1143L21.8351 27.962ZM21.6496 29.8169C21.7347 28.9664 21.7897 28.4431 21.8772 28.0951C21.9644 27.7484 22.009 27.89 21.8351 27.962L21.0697 26.1143C20.343 26.4153 20.0703 27.0798 19.9377 27.6071C19.8053 28.133 19.7378 28.835 19.6595 29.6179L21.6496 29.8169ZM21.5931 30.3819L21.6496 29.8169L19.6595 29.6179L19.603 30.1829L21.5931 30.3819ZM20.855 32.5663C21.2074 32.2474 21.3587 31.855 21.4402 31.5035C21.5153 31.1799 21.553 30.7833 21.5931 30.3819L19.603 30.1829C19.5576 30.6375 19.5311 30.8828 19.4919 31.0518C19.4592 31.193 19.4462 31.1438 19.513 31.0834L20.855 32.5663ZM18.608 33.0834C19.0114 33.0834 19.4098 33.0854 19.7393 33.0429C20.0971 32.9968 20.5025 32.8853 20.855 32.5663L19.513 31.0834C19.5797 31.023 19.6273 31.0408 19.4836 31.0593C19.3116 31.0815 19.0648 31.0834 18.608 31.0834V33.0834ZM16.3946 33.0834H18.608V31.0834H16.3946V33.0834ZM14.1476 32.5663C14.5001 32.8853 14.9055 32.9968 15.2633 33.0429C15.5928 33.0854 15.9912 33.0834 16.3946 33.0834V31.0834C15.9378 31.0834 15.691 31.0815 15.519 31.0593C15.3753 31.0408 15.4229 31.023 15.4896 31.0834L14.1476 32.5663ZM13.4095 30.3819C13.4496 30.7833 13.4873 31.1799 13.5624 31.5035C13.6439 31.855 13.7952 32.2474 14.1476 32.5663L15.4896 31.0834C15.5564 31.1438 15.5434 31.193 15.5107 31.0518C15.4715 30.8828 15.445 30.6375 15.3996 30.1829L13.4095 30.3819ZM13.3531 29.8175L13.4095 30.3819L15.3996 30.1829L15.3431 29.6185L13.3531 29.8175ZM13.1676 27.9626C12.9937 27.8906 13.0382 27.749 13.1254 28.0956C13.213 28.4437 13.268 28.9669 13.3531 29.8175L15.3431 29.6185C15.2648 28.8355 15.1973 28.1336 15.065 27.6077C14.9323 27.0803 14.6596 26.4158 13.9329 26.1148L13.1676 27.9626ZM11.7248 29.1431C12.3864 28.6018 12.7952 28.2707 13.1033 28.0865C13.4101 27.903 13.3415 28.0346 13.1676 27.9626L13.9329 26.1148C13.2062 25.8138 12.5435 26.0909 12.0768 26.3699C11.6114 26.6483 11.0673 27.0969 10.4583 27.5951L11.7248 29.1431ZM11.2857 29.5023L11.7248 29.1431L10.4583 27.5951L10.0193 27.9544L11.2857 29.5023ZM9.21922 30.5249C9.69398 30.5486 10.0784 30.3781 10.3845 30.1873C10.6664 30.0115 10.9736 29.7577 11.2857 29.5023L10.0193 27.9544C9.6657 28.2436 9.4735 28.3984 9.32631 28.4902C9.20335 28.5668 9.22893 28.5229 9.31885 28.5274L9.21922 30.5249ZM7.26471 29.3017C7.54993 29.5869 7.83028 29.87 8.09329 30.073C8.37889 30.2934 8.74446 30.5013 9.21922 30.5249L9.31885 28.5274C9.40877 28.5319 9.42986 28.5781 9.31513 28.4896C9.1778 28.3836 9.00196 28.2105 8.67892 27.8875L7.26471 29.3017ZM5.69961 27.7366L7.26471 29.3017L8.67892 27.8875L7.11383 26.3224L5.69961 27.7366ZM4.47639 25.7821C4.50007 26.2569 4.70795 26.6224 4.92834 26.908C5.1313 27.1711 5.41439 27.4514 5.69961 27.7366L7.11383 26.3224C6.7908 25.9994 6.6177 25.8235 6.51173 25.6862C6.42319 25.5715 6.46942 25.5926 6.4739 25.6825L4.47639 25.7821ZM5.49906 23.7156C5.24364 24.0278 4.98984 24.3349 4.81407 24.6168C4.62318 24.9229 4.45271 25.3074 4.47639 25.7821L6.4739 25.6825C6.47839 25.7724 6.43449 25.798 6.51117 25.675C6.60295 25.5278 6.75769 25.3356 7.04698 24.9821L5.49906 23.7156ZM5.85824 23.2766L5.49906 23.7156L7.04698 24.9821L7.40615 24.5431L5.85824 23.2766ZM7.0387 21.8338C6.96667 21.6599 7.0983 21.5913 6.91484 21.8981C6.73063 22.2061 6.39954 22.615 5.85824 23.2766L7.40615 24.5431C7.90443 23.9341 8.35302 23.39 8.63135 22.9245C8.91043 22.4578 9.18747 21.7951 8.88646 21.0684L7.0387 21.8338ZM5.18379 21.6483C6.03436 21.7334 6.55758 21.7884 6.90567 21.8759C7.25234 21.9632 7.11072 22.0077 7.0387 21.8338L8.88646 21.0684C8.58545 20.3417 7.92096 20.069 7.39361 19.9364C6.86768 19.8041 6.16576 19.7365 5.38279 19.6582L5.18379 21.6483ZM4.61946 21.5919L5.18378 21.6483L5.38279 19.6582L4.81847 19.6018L4.61946 21.5919ZM2.43507 20.8538C2.75403 21.2062 3.14641 21.3575 3.49784 21.439C3.82147 21.514 4.21809 21.5517 4.61946 21.5919L4.81847 19.6018C4.3639 19.5564 4.11858 19.5299 3.9496 19.4907C3.80843 19.458 3.85755 19.445 3.91797 19.5118L2.43507 20.8538ZM1.91797 18.6068C1.91797 19.0101 1.91603 19.4085 1.95849 19.738C2.0046 20.0958 2.1161 20.5013 2.43506 20.8538L3.91797 19.5118C3.97838 19.5785 3.96061 19.6261 3.94208 19.4824C3.91991 19.3103 3.91797 19.0636 3.91797 18.6068H1.91797ZM1.91797 16.3934V18.6068H3.91797V16.3934H1.91797ZM2.43506 14.1464C2.1161 14.4988 2.0046 14.9043 1.95849 15.2621C1.91603 15.5916 1.91797 15.99 1.91797 16.3934H3.91797C3.91797 15.9366 3.91991 15.6898 3.94208 15.5178C3.96061 15.374 3.97838 15.4216 3.91797 15.4884L2.43506 14.1464ZM4.61946 13.4083C4.21809 13.4484 3.82147 13.4861 3.49784 13.5612C3.14641 13.6426 2.75402 13.7939 2.43506 14.1464L3.91797 15.4884C3.85756 15.5552 3.80843 15.5422 3.9496 15.5095C4.11858 15.4703 4.3639 15.4438 4.81847 15.3984L4.61946 13.4083ZM5.18434 13.3518L4.61946 13.4083L4.81846 15.3984L5.38334 15.3419L5.18434 13.3518ZM7.03925 13.1663C7.11127 12.9924 7.25289 13.037 6.90622 13.1242C6.55813 13.2117 6.03491 13.2667 5.18433 13.3518L5.38334 15.3419C6.16631 15.2636 6.86823 15.196 7.39416 15.0637C7.92151 14.9311 8.586 14.6584 8.88701 13.9317L7.03925 13.1663ZM5.85879 11.7235C6.40009 12.3851 6.73118 12.794 6.91539 13.102C7.09885 13.4088 6.96722 13.3402 7.03925 13.1663L8.88701 13.9317C9.18802 13.205 8.91098 12.5423 8.6319 12.0756C8.35357 11.6101 7.90498 11.066 7.4067 10.457L5.85879 11.7235ZM5.49913 11.2839L5.85879 11.7235L7.4067 10.457L7.04704 10.0175L5.49913 11.2839ZM4.47645 9.21741C4.45277 9.69216 4.62325 10.0766 4.81413 10.3827C4.98991 10.6646 5.2437 10.9717 5.49913 11.2839L7.04704 10.0175C6.75776 9.66388 6.60302 9.47169 6.51123 9.3245C6.43456 9.20153 6.47845 9.22711 6.47397 9.31703L4.47645 9.21741ZM5.69968 7.2629C5.41446 7.54812 5.13136 7.82846 4.92841 8.09147C4.70802 8.37708 4.50013 8.74265 4.47645 9.21741L6.47397 9.31703C6.46948 9.40695 6.42326 9.42804 6.51179 9.31331C6.61776 9.17599 6.79086 9.00014 7.11389 8.67711L5.69968 7.2629ZM7.26478 5.6978L5.69968 7.2629L7.11389 8.67711L8.67899 7.11201L7.26478 5.6978ZM9.21929 4.47457C8.74453 4.49825 8.37896 4.70614 8.09335 4.92653C7.83034 5.12948 7.55 5.41258 7.26478 5.6978L8.67899 7.11201C9.00202 6.78898 9.17787 6.61588 9.31519 6.50991C9.42992 6.42138 9.40884 6.4676 9.31891 6.47209L9.21929 4.47457ZM11.2858 5.49725C10.9736 5.24182 10.6665 4.98803 10.3846 4.81225C10.0785 4.62137 9.69404 4.45089 9.21929 4.47457L9.31891 6.47209C9.22899 6.47657 9.20341 6.43268 9.32638 6.50935C9.47357 6.60114 9.66576 6.75588 10.0193 7.04516L11.2858 5.49725ZM11.7248 5.85646L11.2858 5.49725L10.0193 7.04516L10.4584 7.40437L11.7248 5.85646ZM13.1676 7.03692C13.3415 6.96489 13.4102 7.09652 13.1034 6.91306C12.7953 6.72885 12.3864 6.39776 11.7248 5.85646L10.4584 7.40437C11.0674 7.90265 11.6115 8.35124 12.0769 8.62957C12.5436 8.90865 13.2063 9.18569 13.933 8.88468L13.1676 7.03692ZM13.3531 5.182C13.2681 6.03258 13.2131 6.5558 13.1255 6.90389C13.0383 7.25055 12.9937 7.10894 13.1676 7.03692L13.933 8.88468C14.6597 8.58367 14.9324 7.91918 15.0651 7.39183C15.1974 6.8659 15.2649 6.16397 15.3432 5.38101L13.3531 5.182ZM13.4095 4.61824L13.3531 5.182L15.3432 5.38101L15.3996 4.81724L13.4095 4.61824ZM14.1476 2.43384C13.7952 2.7528 13.6439 3.14519 13.5624 3.49662C13.4873 3.82024 13.4496 4.21687 13.4095 4.61823L15.3996 4.81724C15.445 4.36267 15.4715 4.11735 15.5107 3.94838C15.5434 3.80721 15.5564 3.85633 15.4896 3.91675L14.1476 2.43384ZM16.3946 1.91675C15.9912 1.91675 15.5928 1.91481 15.2633 1.95727C14.9056 2.00338 14.5001 2.11488 14.1476 2.43384L15.4896 3.91675C15.4229 3.97716 15.3753 3.95939 15.519 3.94086C15.691 3.91869 15.9378 3.91675 16.3946 3.91675V1.91675ZM18.608 1.91675H16.3946V3.91675H18.608V1.91675ZM20.855 2.43384C20.5025 2.11488 20.097 2.00338 19.7393 1.95727C19.4098 1.91481 19.0114 1.91675 18.608 1.91675V3.91675C19.0648 3.91675 19.3116 3.91869 19.4836 3.94086C19.6273 3.95939 19.5797 3.97716 19.513 3.91675L20.855 2.43384ZM22.3346 17.5001C22.3346 20.1695 20.1707 22.3334 17.5013 22.3334V24.3334C21.2752 24.3334 24.3346 21.274 24.3346 17.5001H22.3346ZM17.5013 12.6667C20.1707 12.6667 22.3346 14.8307 22.3346 17.5001H24.3346C24.3346 13.7261 21.2752 10.6667 17.5013 10.6667V12.6667ZM12.668 17.5001C12.668 14.8307 14.8319 12.6667 17.5013 12.6667V10.6667C13.7274 10.6667 10.668 13.7261 10.668 17.5001H12.668ZM17.5013 22.3334C14.8319 22.3334 12.668 20.1695 12.668 17.5001H10.668C10.668 21.274 13.7274 24.3334 17.5013 24.3334V22.3334Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
      <div className="px-8 mb-16 flex justify-between">
        <DashCount children={{ item: "Alle Mitarbeiter", count: 100 }} style={{ background: "#4269E1" }} />
        <DashCount children={{ item: "Verfügbar", count: 3 }} style={{ background: "#42E148" }} />
        <DashCount children={{ item: "Inaktiv", count: 8 }} style={{ background: "#E14242" }} />
        <DashCount children={{ item: "Abwesend", count: 2 }} style={{ background: "#C142E1" }} />
        <DashCount children={{ item: "Urlaub", count: 12 }} style={{ background: "#42C4E1" }} />
      </div>
      <div className="px-32 grid gap-4">
        <div className="grid grid-cols-3">
          <DashLoc children={{ count: 20563 }} />
          <DashLoc children={{ count: 20563 }} />
          <DashLoc children={{ count: 20563 }} />
        </div>
        <div className="grid grid-cols-3">
          <DashLoc children={{ count: 20563 }} />
          <DashLoc children={{ count: 20563 }} />
          <DashLoc children={{ count: 20563 }} />
        </div>
        <div className="grid grid-cols-3">
          <DashLoc children={{ count: 20563 }} />
          <DashLoc children={{ count: 20563 }} />
          <DashLoc children={{ count: 20563 }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;