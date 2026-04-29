import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Printer, Plus, Trash2, FileText } from "lucide-react";
import { companyInfo } from "@/lib/companyInfo";

type LineItem = {
  id: string;
  description: string;
  hsn: string;
  quantity: number;
  rate: number;
};

type TaxType = "intra" | "inter";

const todayISO = () => new Date().toISOString().slice(0, 10);
const futureISO = (days: number) => {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
};

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(isFinite(n) ? n : 0);

const formatDate = (iso: string) => {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
};

// Convert number to Indian-format words (lakhs/crores)
function numberToWordsINR(num: number): string {
  if (!isFinite(num)) return "Zero Rupees Only";
  const rupees = Math.floor(num);
  const paise = Math.round((num - rupees) * 100);
  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const twoDigit = (n: number): string => {
    if (n < 20) return ones[n];
    return tens[Math.floor(n / 10)] + (n % 10 ? " " + ones[n % 10] : "");
  };

  const threeDigit = (n: number): string => {
    const h = Math.floor(n / 100);
    const r = n % 100;
    return (
      (h ? ones[h] + " Hundred" + (r ? " " : "") : "") +
      (r ? twoDigit(r) : "")
    );
  };

  if (rupees === 0 && paise === 0) return "Zero Rupees Only";

  let words = "";
  let n = rupees;
  const crore = Math.floor(n / 10000000);
  n %= 10000000;
  const lakh = Math.floor(n / 100000);
  n %= 100000;
  const thousand = Math.floor(n / 1000);
  n %= 1000;
  const hundred = n;

  if (crore) words += twoDigit(crore) + " Crore ";
  if (lakh) words += twoDigit(lakh) + " Lakh ";
  if (thousand) words += twoDigit(thousand) + " Thousand ";
  if (hundred) words += threeDigit(hundred) + " ";
  words = words.trim() + " Rupees";

  if (paise > 0) {
    words += " and " + twoDigit(paise) + " Paise";
  }

  return words + " Only";
}

const blankItem = (): LineItem => ({
  id: Math.random().toString(36).slice(2, 9),
  description: "",
  hsn: "998314",
  quantity: 1,
  rate: 0,
});

export default function InvoicePage() {
  // Invoice meta
  const [invoiceNumber, setInvoiceNumber] = useState("INV-2025-001");
  const [invoiceDate, setInvoiceDate] = useState(todayISO());
  const [dueDate, setDueDate] = useState(futureISO(15));

  // Buyer details
  const [buyerName, setBuyerName] = useState("");
  const [buyerAddress, setBuyerAddress] = useState("");
  const [buyerGstin, setBuyerGstin] = useState("");
  const [buyerStateCode, setBuyerStateCode] = useState("29");

  // Line items
  const [items, setItems] = useState<LineItem[]>([
    {
      id: "1",
      description: "AI Development Services",
      hsn: "998314",
      quantity: 1,
      rate: 50000,
    },
  ]);

  // Tax
  const [taxType, setTaxType] = useState<TaxType>("intra");
  const [gstRate, setGstRate] = useState(companyInfo.defaultGstRate);

  // Notes
  const [notes, setNotes] = useState(
    "Thank you for your business. Payment is due within 15 days from invoice date.",
  );

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, i) => sum + i.quantity * i.rate, 0);
    const taxAmount = (subtotal * gstRate) / 100;
    const cgst = taxType === "intra" ? taxAmount / 2 : 0;
    const sgst = taxType === "intra" ? taxAmount / 2 : 0;
    const igst = taxType === "inter" ? taxAmount : 0;
    const total = subtotal + taxAmount;
    return { subtotal, cgst, sgst, igst, taxAmount, total };
  }, [items, gstRate, taxType]);

  const updateItem = (id: string, field: keyof LineItem, value: string | number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  const addItem = () => setItems((prev) => [...prev, blankItem()]);
  const removeItem = (id: string) =>
    setItems((prev) => (prev.length > 1 ? prev.filter((i) => i.id !== id) : prev));

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen py-12">
      {/* Action bar (hidden in print) */}
      <div className="no-print container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
          <div>
            <div className="text-xs font-mono text-primary uppercase tracking-widest mb-1">
              GST Invoice Generator
            </div>
            <h1 className="text-3xl font-bold">Create an Invoice</h1>
          </div>
          <Button
            onClick={handlePrint}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(0,212,255,0.5)]"
            data-testid="button-print-invoice"
          >
            <Printer className="mr-2 h-4 w-4" /> Download as PDF
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Fill in the details — the preview on the right updates live. Click
          Download to save it as a PDF or print it.
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form (hidden in print) */}
        <div className="no-print space-y-6">
          {/* Invoice Meta */}
          <div className="bg-card border border-border/50 rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-4">Invoice Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="invoice-number">Invoice #</Label>
                <Input
                  id="invoice-number"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  data-testid="input-invoice-number"
                />
              </div>
              <div>
                <Label htmlFor="invoice-date">Date</Label>
                <Input
                  id="invoice-date"
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                  data-testid="input-invoice-date"
                />
              </div>
              <div>
                <Label htmlFor="due-date">Due Date</Label>
                <Input
                  id="due-date"
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  data-testid="input-due-date"
                />
              </div>
            </div>
          </div>

          {/* Buyer */}
          <div className="bg-card border border-border/50 rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-4">Bill To</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="buyer-name">Client Name / Company</Label>
                <Input
                  id="buyer-name"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  placeholder="Acme Corp Pvt Ltd"
                  data-testid="input-buyer-name"
                />
              </div>
              <div>
                <Label htmlFor="buyer-address">Address</Label>
                <Textarea
                  id="buyer-address"
                  value={buyerAddress}
                  onChange={(e) => setBuyerAddress(e.target.value)}
                  placeholder="123 Main St, Bengaluru, Karnataka 560001"
                  rows={3}
                  data-testid="input-buyer-address"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="buyer-gstin">GSTIN (optional)</Label>
                  <Input
                    id="buyer-gstin"
                    value={buyerGstin}
                    onChange={(e) => setBuyerGstin(e.target.value.toUpperCase())}
                    placeholder="29ABCDE1234F1Z5"
                    data-testid="input-buyer-gstin"
                  />
                </div>
                <div>
                  <Label htmlFor="buyer-state">State Code</Label>
                  <Input
                    id="buyer-state"
                    value={buyerStateCode}
                    onChange={(e) => setBuyerStateCode(e.target.value)}
                    placeholder="29"
                    data-testid="input-buyer-state"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Line Items */}
          <div className="bg-card border border-border/50 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Line Items</h2>
              <Button
                size="sm"
                variant="outline"
                onClick={addItem}
                data-testid="button-add-item"
              >
                <Plus className="mr-1 h-4 w-4" /> Add Item
              </Button>
            </div>
            <div className="space-y-4">
              {items.map((item, idx) => (
                <div
                  key={item.id}
                  className="border border-border/50 rounded-lg p-4 space-y-3"
                  data-testid={`item-row-${idx}`}
                >
                  <div className="flex items-start gap-2">
                    <Input
                      placeholder="Service description"
                      value={item.description}
                      onChange={(e) =>
                        updateItem(item.id, "description", e.target.value)
                      }
                      className="flex-1"
                      data-testid={`input-description-${idx}`}
                    />
                    {items.length > 1 && (
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive flex-shrink-0"
                        data-testid={`button-remove-${idx}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <Label className="text-xs">HSN/SAC</Label>
                      <Input
                        value={item.hsn}
                        onChange={(e) =>
                          updateItem(item.id, "hsn", e.target.value)
                        }
                        data-testid={`input-hsn-${idx}`}
                      />
                    </div>
                    <div>
                      <Label className="text-xs">Qty</Label>
                      <Input
                        type="number"
                        min="0"
                        step="any"
                        value={item.quantity}
                        onChange={(e) =>
                          updateItem(
                            item.id,
                            "quantity",
                            parseFloat(e.target.value) || 0,
                          )
                        }
                        data-testid={`input-quantity-${idx}`}
                      />
                    </div>
                    <div>
                      <Label className="text-xs">Rate (₹)</Label>
                      <Input
                        type="number"
                        min="0"
                        step="any"
                        value={item.rate}
                        onChange={(e) =>
                          updateItem(
                            item.id,
                            "rate",
                            parseFloat(e.target.value) || 0,
                          )
                        }
                        data-testid={`input-rate-${idx}`}
                      />
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    Amount:{" "}
                    <span className="font-semibold text-foreground">
                      {formatINR(item.quantity * item.rate)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tax */}
          <div className="bg-card border border-border/50 rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-4">Tax Settings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="tax-type">Transaction Type</Label>
                <select
                  id="tax-type"
                  value={taxType}
                  onChange={(e) => setTaxType(e.target.value as TaxType)}
                  className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                  data-testid="select-tax-type"
                >
                  <option value="intra">Intra-State (CGST + SGST)</option>
                  <option value="inter">Inter-State (IGST)</option>
                </select>
              </div>
              <div>
                <Label htmlFor="gst-rate">GST Rate (%)</Label>
                <Input
                  id="gst-rate"
                  type="number"
                  min="0"
                  max="28"
                  step="any"
                  value={gstRate}
                  onChange={(e) => setGstRate(parseFloat(e.target.value) || 0)}
                  data-testid="input-gst-rate"
                />
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-card border border-border/50 rounded-2xl p-6">
            <Label htmlFor="notes">Notes / Terms</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              data-testid="input-notes"
            />
          </div>
        </div>

        {/* Preview (printable) */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="print-area bg-white text-black border border-border/50 rounded-2xl p-8 md:p-10 shadow-lg lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            {/* Invoice Header */}
            <div className="flex items-start justify-between mb-8 pb-6 border-b border-gray-300">
              <div>
                <h1 className="text-2xl font-bold mb-1">{companyInfo.name}</h1>
                <div className="text-xs text-gray-600 leading-relaxed">
                  <div>{companyInfo.address.line1}</div>
                  <div>
                    {companyInfo.address.city}, {companyInfo.address.state}{" "}
                    {companyInfo.address.pincode}
                  </div>
                  <div>
                    Email: {companyInfo.email} · Web: {companyInfo.website}
                  </div>
                  <div className="mt-2 font-mono">
                    GSTIN: {companyInfo.gstin}
                  </div>
                  <div className="font-mono">PAN: {companyInfo.pan}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Tax Invoice
                </div>
                <div className="text-xl font-bold mb-3">
                  #{invoiceNumber || "—"}
                </div>
                <div className="text-xs text-gray-600">
                  <div>
                    <span className="text-gray-500">Date:</span>{" "}
                    {formatDate(invoiceDate)}
                  </div>
                  <div>
                    <span className="text-gray-500">Due:</span>{" "}
                    {formatDate(dueDate)}
                  </div>
                </div>
              </div>
            </div>

            {/* Bill To */}
            <div className="mb-6">
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Bill To
              </div>
              <div className="font-semibold">{buyerName || "Client Name"}</div>
              <div className="text-xs text-gray-600 whitespace-pre-line">
                {buyerAddress || "Client Address"}
              </div>
              {buyerGstin && (
                <div className="text-xs font-mono mt-1">
                  GSTIN: {buyerGstin}
                </div>
              )}
            </div>

            {/* Items Table */}
            <table className="w-full text-xs border-collapse mb-6">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="text-left p-2 font-semibold">#</th>
                  <th className="text-left p-2 font-semibold">Description</th>
                  <th className="text-left p-2 font-semibold">HSN/SAC</th>
                  <th className="text-right p-2 font-semibold">Qty</th>
                  <th className="text-right p-2 font-semibold">Rate</th>
                  <th className="text-right p-2 font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, idx) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="p-2">{idx + 1}</td>
                    <td className="p-2">{item.description || "—"}</td>
                    <td className="p-2 font-mono">{item.hsn}</td>
                    <td className="p-2 text-right">{item.quantity}</td>
                    <td className="p-2 text-right">{formatINR(item.rate)}</td>
                    <td className="p-2 text-right font-semibold">
                      {formatINR(item.quantity * item.rate)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Totals */}
            <div className="flex justify-end mb-6">
              <div className="w-full max-w-xs text-xs">
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">Subtotal</span>
                  <span>{formatINR(totals.subtotal)}</span>
                </div>
                {taxType === "intra" ? (
                  <>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-600">
                        CGST @ {gstRate / 2}%
                      </span>
                      <span>{formatINR(totals.cgst)}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-600">
                        SGST @ {gstRate / 2}%
                      </span>
                      <span>{formatINR(totals.sgst)}</span>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">IGST @ {gstRate}%</span>
                    <span>{formatINR(totals.igst)}</span>
                  </div>
                )}
                <div className="flex justify-between py-2 border-t-2 border-gray-300 mt-2 font-bold text-sm">
                  <span>Total</span>
                  <span>{formatINR(totals.total)}</span>
                </div>
              </div>
            </div>

            {/* Amount in Words */}
            <div className="bg-gray-50 border border-gray-200 rounded p-3 mb-6 text-xs">
              <span className="text-gray-500 uppercase tracking-widest text-[10px]">
                Amount in Words:{" "}
              </span>
              <span className="font-semibold">
                {numberToWordsINR(totals.total)}
              </span>
            </div>

            {/* Bank Details */}
            <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
              <div>
                <div className="uppercase tracking-widest text-gray-500 text-[10px] mb-1">
                  Bank Details
                </div>
                <div>{companyInfo.bank.bankName}</div>
                <div>A/C: {companyInfo.bank.accountNumber}</div>
                <div>IFSC: {companyInfo.bank.ifsc}</div>
                <div>{companyInfo.bank.accountName}</div>
              </div>
              <div>
                <div className="uppercase tracking-widest text-gray-500 text-[10px] mb-1">
                  Registrations
                </div>
                <div>MSME / Udyam: {companyInfo.msmeUAM}</div>
                <div>GeM Seller: {companyInfo.gemSellerId}</div>
              </div>
            </div>

            {/* Notes */}
            {notes && (
              <div className="border-t border-gray-300 pt-4 mb-6">
                <div className="uppercase tracking-widest text-gray-500 text-[10px] mb-1">
                  Notes
                </div>
                <div className="text-xs text-gray-700 whitespace-pre-line">
                  {notes}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="text-center text-[10px] text-gray-500 pt-4 border-t border-gray-300">
              This is a computer-generated invoice and does not require a
              signature.
            </div>
          </div>

          <div className="no-print mt-4 text-xs text-muted-foreground flex items-start gap-2">
            <FileText className="h-4 w-4 flex-shrink-0 mt-0.5" />
            <span>
              Tip: Edit your GSTIN, address, MSME number, and bank details in{" "}
              <code className="font-mono text-primary">
                src/lib/companyInfo.ts
              </code>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
