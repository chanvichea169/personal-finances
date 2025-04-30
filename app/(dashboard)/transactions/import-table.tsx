import { TableHeadSelect } from "./table-head-select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";

interface Props {
  /**
   * An array of header strings
   */
  headers: string[];
  /**
   * A 2D array of strings representing the table body
   */
  body: string[][];

  selectedColumns: Record<string, string | null>;
  onTableHeadSelectChange: (columnIndex: number, value: string | null) => void;
}

export const ImportTable = ({
  headers,
  body,
  selectedColumns,
  onTableHeadSelectChange,
}: Props) => {
  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            {headers.map((header, index) => (
              <TableHead key={`header-${index}`}>
                <TableHeadSelect
                  columnIndex={index}
                  selectedColumns={selectedColumns}
                  onChange={onTableHeadSelectChange}
                />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {body.map((row, rowIndex) => (
            <TableRow key={`row-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <TableCell key={`cell-${rowIndex}-${cellIndex}`}>
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
