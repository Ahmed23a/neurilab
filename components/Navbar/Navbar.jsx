import React from "react";
import { Grid } from "@mui/material";
export default function Navbar() {
  return (
    <Grid
      sx={{
        padding: " 1rem",
        boxSizing: "border-box",
        color: "white",
        display: "flex",
        justifyContent: "start",
        fontFamily: "sans-serif",
        background: "transparent",
        position: "fixed",
        width: "100%",
      }}
    >
      <Grid className="Logo" sx={{ display: "flex", alignItems: "center" }}>
        <Grid sx={{ width: "50px", height: "50px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="100pt"
            height="100pt"
            viewBox="0 0 1600.000000 530.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(50.000000,50.000000) scale(.100000,-.100000)"
              fill="#eb5a57"
              stroke="none"
            >
              <path d="M1619 4535 c-26 -14 -79 -85 -79 -106 0 -7 -6 -20 -14 -28 -14 -17 -216 -369 -216 -378 0 -4 -76 -135 -100 -173 -6 -8 -13 -22 -17 -30 -4 -8 -20 -37 -36 -65 -62 -104 -107 -192 -102 -198 3 -4 2 -5 -2 -2 -7 5 -133 -213 -133 -232 0 -6 -4 -13 -9 -15 -15 -5 -131 -220 -124 -231 18 -29 71 -35 313 -33 253 2 264 3 309 46 26 25 52 70 46 79 -3 5 -1 11 3 13 14 5 167 288 157 288 -4 0 1 7 9 16 9 8 16 21 16 29 0 7 3 15 8 17 4 2 22 32 41 68 18 36 51 98 73 138 22 39 37 72 33 72 -4 0 1 7 9 16 9 8 16 21 16 28 0 7 8 20 18 30 18 15 20 14 38 -21 10 -21 21 -40 25 -43 3 -3 28 -50 56 -105 28 -55 74 -143 102 -195 28 -52 56 -107 62 -122 6 -16 15 -28 20 -28 5 0 9 -6 9 -14 0 -17 39 -88 55 -98 5 -4 6 -8 2 -8 -12 0 72 -152 92 -168 44 -35 75 -39 306 -40 235 -1 298 6 309 34 7 18 -68 160 -83 157 -6 -2 -8 3 -5 10 2 7 -34 80 -82 162 -47 83 -90 159 -95 170 -6 11 -15 29 -22 40 -20 33 -90 156 -119 210 -15 28 -32 49 -37 48 -6 -2 -8 3 -6 10 2 6 -11 39 -30 72 -19 33 -44 78 -55 100 -12 22 -35 59 -51 83 -16 24 -29 46 -29 50 0 4 -19 41 -43 82 -24 41 -65 114 -92 162 -68 119 -65 118 -318 118 -154 -1 -208 -4 -228 -15z" />
              <path d="M3229 4540 c-111 -4 -161 -9 -173 -19 -22 -19 -196 -368 -196 -394 0 -12 56 -119 124 -237 183 -317 172 -319 369 70 76 151 140 280 141 286 1 7 7 18 13 25 17 21 54 99 47 99 -3 0 2 7 10 16 9 8 16 21 16 28 0 8 7 19 15 26 8 7 15 22 15 35 0 24 -33 69 -44 58 -3 -3 -6 -1 -6 5 0 11 -29 12 -331 2z" />
              <path d="M10658 3753 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
              <path d="M3592 3623 c-16 -21 -42 -60 -57 -88 -39 -69 -55 -97 -115 -200 -105 -181 -105 -183 29 -390 14 -22 31 -49 38 -60 77 -127 101 -165 125 -196 15 -20 28 -39 28 -42 0 -10 153 -251 180 -284 28 -33 13 -36 -147 -29 -300 13 -698 25 -746 22 -33 -2 -54 -9 -73 -27 -25 -23 -206 -320 -206 -336 0 -4 -6 -15 -13 -23 -20 -22 -55 -102 -55 -126 0 -12 6 -24 14 -27 30 -12 1594 -25 1651 -14 19 3 98 107 89 116 -2 2 2 11 9 20 19 22 107 170 110 184 1 7 7 16 13 22 6 5 17 25 24 42 15 41 2 78 -70 194 -27 44 -50 84 -50 88 0 4 -9 16 -20 26 -10 9 -18 20 -17 24 2 7 -46 90 -172 299 -47 79 -92 156 -100 170 -7 15 -21 35 -29 45 -9 10 -17 23 -18 30 -3 19 -71 127 -76 122 -3 -3 -5 1 -5 8 0 14 -102 189 -116 198 -5 3 -9 10 -9 15 0 5 -19 42 -42 82 -105 186 -122 200 -174 135z" />
              <path d="M10882 3535 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z" />
              <path d="M7268 3183 c12 -2 30 -2 40 0 9 3 -1 5 -23 4 -22 0 -30 -2 -17 -4z" />
              <path d="M11718 3183 c12 -2 30 -2 40 0 9 3 -1 5 -23 4 -22 0 -30 -2 -17 -4z" />
              <path d="M15318 3163 c12 -2 32 -2 45 0 12 2 2 4 -23 4 -25 0 -35 -2 -22 -4z" />
              <path d="M8455 2795 c0 -198 1 -280 2 -183 2 97 2 259 0 360 -1 101 -2 21 -2 -177z" />
              <path d="M15238 2953 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
              <path d="M1627 2702 c-12 -20 -29 -49 -37 -64 -15 -27 -81 -139 -100 -168 -71 -112 -178 -305 -173 -313 3 -5 1 -7 -4 -4 -6 4 -14 0 -17 -9 -3 -9 -69 -122 -147 -251 -77 -129 -143 -242 -147 -251 -3 -9 -22 -41 -42 -72 -19 -30 -42 -68 -50 -85 -8 -16 -18 -32 -21 -35 -3 -3 -18 -27 -34 -55 -15 -27 -31 -55 -36 -60 -15 -20 2 -80 46 -155 23 -41 52 -91 63 -110 64 -112 92 -158 111 -178 l22 -23 807 6 c444 3 819 8 833 11 16 3 29 14 32 25 5 17 -46 136 -63 149 -4 3 -13 17 -21 32 -52 99 -63 118 -70 118 -4 0 -10 11 -13 25 -4 16 -11 23 -18 19 -7 -4 -8 -3 -4 4 8 13 -55 117 -87 144 -11 10 -35 20 -54 24 -32 6 -633 -11 -825 -23 -74 -5 -88 -3 -88 10 0 12 77 139 232 383 15 23 24 45 21 48 -4 3 -2 6 4 6 10 0 25 22 128 190 33 52 65 103 73 112 18 22 23 104 9 137 -20 45 -218 384 -233 398 -8 8 -14 18 -14 23 0 4 -14 13 -31 19 -28 10 -31 8 -52 -27z" />
              <path d="M785 2680 c-49 -4 -151 -11 -225 -14 -142 -7 -413 -25 -441 -29 -29 -5 -49 -28 -49 -57 0 -27 140 -269 183 -317 11 -13 17 -23 14 -23 -10 0 21 -49 52 -83 25 -27 29 -28 96 -23 38 3 130 8 202 11 73 3 144 10 157 16 13 6 34 30 47 53 13 22 29 50 36 61 7 11 15 27 19 35 4 8 18 32 31 53 13 20 21 37 18 37 -3 0 2 9 12 19 10 11 27 37 38 58 11 21 32 58 47 82 30 48 30 84 -1 111 -20 18 -103 21 -236 10z" />
            </g>
          </svg>
        </Grid>
        <Grid
          sx={{
            fontSize: "2rem",
            color: "white",
            fontWeight: "700",
            fontFamily: "Quicksand",
            "& > span": {
              color: "#eb5a57",
            },
          }}
        >
          neuric<span>Lab</span>
        </Grid>
      </Grid>
    </Grid>
  );
}
