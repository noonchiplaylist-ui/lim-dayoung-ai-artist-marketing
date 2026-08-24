import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Lim Dayoung | AI Artist Marketing Portfolio",
  description:
    "AI 콘텐츠 제작, 글로벌 커뮤니케이션, 브랜드·채널 운영 경험을 연결하는 임다영의 AI Artist Marketing 포트폴리오.",
  openGraph: {
    title: "Lim Dayoung | AI Artist Marketing Portfolio",
    description:
      "I build worlds people want to follow. AI 콘텐츠에서 사람과의 연결까지.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Lim Dayoung AI Artist Marketing Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lim Dayoung | AI Artist Marketing Portfolio",
    description: "World to content. Content to connection.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
