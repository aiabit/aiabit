"use client";

import Image from "next/image";
import { Button, Typography } from "antd";
import Link from "next/link";

const { Title, Text } = Typography;

export default function NotFoundPage() {
  return (
    <div className="dark:bg-navy-900 flex min-h-screen grow bg-slate-50">
      <main className="grid w-full grow grid-cols-1 place-items-center bg-center">
        <div className="max-w-[26rem] text-center">
          <div className="w-full">
            <Image
              className="w-full"
              src="/images/ufo.svg"
              alt="image"
              width="400"
              height="300"
            />
          </div>
          <Typography>
            <Title>404</Title>
            <Title level={2}>Oops. This Page Not Found.</Title>
            <Text>This page you are looking not available</Text>
          </Typography>
          <Button className="mt-8" type="primary">
            <Link href="/">Back To Home</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
