import * as React from "react";

function Avatar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={450}
      height={480}
      viewBox="0 0 264 280"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M124 144.611V163h4c39.765 0 72 32.235 72 72v9H0v-9c0-39.765 32.235-72 72-72h4v-18.389c-17.237-8.189-29.628-24.924-31.695-44.73C38.48 99.058 34 94.052 34 88V74c0-5.946 4.325-10.882 10-11.834V56c0-30.928 25.072-56 56-56s56 25.072 56 56v6.166c5.675.952 10 5.888 10 11.834v14c0 6.052-4.48 11.058-10.305 11.881-2.067 19.806-14.458 36.541-31.695 44.73z"
          id="prefix__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g mask="url(#prefix__mask-4)">
          <g transform="translate(32 36)">
            <mask id="prefix__b" fill="#fff">
              <use xlinkHref="#prefix__a" />
            </mask>
            <use fill="#D0C6AC" xlinkHref="#prefix__a" />
            <g mask="url(#prefix__b)" fill="#FFDBB4">
              <path d="M-32 0h264v244H-32z" />
            </g>
            <path
              d="M156 79v23c0 30.928-25.072 56-56 56s-56-25.072-56-56V79v15c0 30.928 25.072 56 56 56s56-25.072 56-56V79z"
              fillOpacity={0.1}
              fill="#000"
              mask="url(#prefix__b)"
            />
          </g>
          <g transform="translate(0 170)">
            <defs>
              <path
                d="M165.96 29.295c36.976 3.03 66.04 34 66.04 71.757V110H32v-8.948c0-38.1 29.592-69.287 67.045-71.832-.03.373-.045.75-.045 1.128 0 11.863 14.998 21.48 33.5 21.48 18.502 0 33.5-9.617 33.5-21.48 0-.353-.013-.704-.04-1.053z"
                id="prefix__c"
              />
            </defs>
            <mask id="prefix__d" fill="#fff">
              <use xlinkHref="#prefix__c" />
            </mask>
            <use fill="#E6E6E6" xlinkHref="#prefix__c" />
            <g mask="url(#prefix__d)" fill="#ff488e">
              <path d="M0 0h264v110H0z" />
            </g>
            <g
              opacity={0.6}
              mask="url(#prefix__d)"
              fillOpacity={0.16}
              fill="#000"
            >
              <ellipse
                cx={40.5}
                cy={27.848}
                rx={39.635}
                ry={26.914}
                transform="translate(92 4)"
              />
            </g>
          </g>
          <g fill="#000">
            <g transform="translate(78 134)">
              <defs>
                <path
                  d="M35.118 15.128C36.176 24.62 44.226 32 54 32c9.804 0 17.874-7.426 18.892-16.96.082-.767-.775-2.04-1.85-2.04H37.088c-1.08 0-2.075 1.178-1.97 2.128z"
                  id="prefix__e"
                />
              </defs>
              <mask id="prefix__f" fill="#fff">
                <use xlinkHref="#prefix__e" />
              </mask>
              <use fillOpacity={0.7} xlinkHref="#prefix__e" />
              <rect
                fill="#FFF"
                mask="url(#prefix__f)"
                x={39}
                y={2}
                width={31}
                height={16}
                rx={5}
              />
              <g mask="url(#prefix__f)" fill="#FF4F6D">
                <g transform="translate(38 24)">
                  <circle cx={11} cy={11} r={11} />
                  <circle cx={21} cy={11} r={11} />
                </g>
              </g>
            </g>
            <path
              d="M120 130c0 4.418 5.373 8 12 8s12-3.582 12-8"
              fillOpacity={0.16}
            />
            <g transform="translate(76 90)" fillOpacity={0.6}>
              <circle cx={30} cy={22} r={6} />
              <circle cx={82} cy={22} r={6} />
            </g>
            <g fillRule="nonzero" fillOpacity={0.6}>
              <path d="M91.63 99.159c3.915-5.51 14.648-8.598 23.893-6.328a2 2 0 00.954-3.884c-10.737-2.637-23.165.94-28.107 7.894a2 2 0 003.26 2.318zM172.37 99.159c-3.915-5.51-14.648-8.598-23.893-6.328a2 2 0 01-.954-3.884c10.737-2.637 23.165.94 28.108 7.894a2 2 0 01-3.26 2.318z" />
            </g>
          </g>
          <defs>
            <path id="prefix__g" d="M0 0h264v280H0z" />
            <path
              d="M133.506 81.335A12 12 0 01140 92v13c0 6.019-4.43 11.002-10.209 11.867-1.743 20.248-14.26 37.416-31.791 45.744V181h4c17.49 0 33.525 6.237 46 16.608V74c0-20.435-8.283-38.935-21.674-52.326C112.935 8.283 94.435 0 74 0 33.13 0 0 33.13 0 74v183.716c13.57-1.94 24-13.61 24-27.716v-45.577A71.954 71.954 0 0146 181h4v-18.389a56.234 56.234 0 01-26-25.365v-61.98c9.147-2.975 18.778-7.249 28.342-12.77 15.403-8.894 28.09-19.555 36.724-30.099a86.921 86.921 0 007.044 15.488c8.768 15.186 21.114 26.349 33.89 32.032v.249c.4.067.794.154 1.18.26.775.323 1.55.626 2.326.91z"
              id="prefix__i"
            />
          </defs>
          <mask id="prefix__h" fill="#fff">
            <use xlinkHref="#prefix__g" />
          </mask>
          <g mask="url(#prefix__h)">
            <g transform="translate(58 18)">
              <mask id="prefix__j" fill="#fff">
                <use xlinkHref="#prefix__i" />
              </mask>
              <use fill="#944F23" xlinkHref="#prefix__i" />
              <g mask="url(#prefix__j)" fill="#B58143">
                <path d="M0 0h264v280H0z" />
              </g>
            </g>
            <path
              d="M191.506 99.335c4.869 1.773 9.757 2.737 14.494 2.813V92c0-20.435-8.283-38.935-21.674-52.326C197.717 53.065 206 71.565 206 92v123.608C193.525 205.237 177.49 199 160 199h-4v-18.389c17.53-8.328 30.048-25.496 31.791-45.744C193.57 134.002 198 129.02 198 123v-13a12 12 0 00-6.494-10.665zm-2.326-.91c-.386-.105-.78-.192-1.18-.26v-.248c.393.175.786.344 1.18.509zM82 155.246a56.234 56.234 0 0026 25.366V199h-4c-7.673 0-15.065 1.2-22 3.423v-47.177z"
              fillOpacity={0.24}
              fill="#000"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Avatar;
