import React from "react";
import PageHeader from "@/components/common/layout/PageHeader";
import ArticlesSection from "@/components/admin/articles/articles";


export default function PreviewArticlesPage() {
  return (
    <div>
      <PageHeader title="View all articles." />
      <ArticlesSection />
    </div>
  );
}
