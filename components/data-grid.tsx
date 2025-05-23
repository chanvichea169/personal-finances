"use client";

import { DataCard, DataCardLoading } from "@/components/data-card";
import { FaPiggyBank } from "react-icons/fa";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { useGetSummary } from "@/features/summary/api/use-get-summary";
import { formatDateRange } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

export const DataGrid = () => {
  const { data, isLoading } = useGetSummary();

  const params = useSearchParams();
  const to = params.get("to") || undefined;
  const from = params.get("from") || undefined;

  const dateRangLabel = formatDateRange({ to, from });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
        <DataCardLoading />
        <DataCardLoading />
        <DataCardLoading />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
      <DataCard
        title="Remaining"
        value={data?.remainingAmount}
        percetageChange={data?.remainingChange}
        icon={FaPiggyBank}
        dateRange={dateRangLabel}
      />
      <DataCard
        title="Income"
        value={data?.incomeAmount}
        percetageChange={data?.incomeChange}
        icon={FaArrowTrendUp}
        dateRange={dateRangLabel}
      />
      <DataCard
        title="Expenses"
        value={data?.expensesAmount}
        percetageChange={data?.expensesChange}
        icon={FaArrowTrendDown}
        dateRange={dateRangLabel}
      />
    </div>
  );
};
