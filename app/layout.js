import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Grid } from "@mui/material";
import logo from "./logo.jpeg"

export const metadata = {
  title: "neuricLab",
  description: "Easy UnrealEngine AI",
  icons: {
    icon: logo.src,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       
      </head>
      <body>
        <AppRouterCacheProvider>
          <Grid>
            {children}
          </Grid>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
