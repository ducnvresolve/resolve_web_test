"use client";
import React, { memo, useRef, useState } from "react";
import { Input } from "@/components/Form/Input";
import { Textarea } from "@/components/Form/Textarea";
import { Button } from "@/components/Button";

const POSITIONS = [
  { value: "sale", label: "Sale" },
  { value: "admin", label: "Admin" },
  { value: "ba", label: "BA" },
  { value: "data-analyst", label: "Data Analyst" },
  { value: "frontend", label: "Frontend Dev" },
  { value: "backend", label: "Backend Dev" },
];

const JobApplyFormComponent = ({ t }: { t: any }) => {
  const formRef = useRef<any>();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form["name"].value.trim();
    const phone = form["phone"].value.trim();
    const email = form["email"].value.trim();
    const position = form["position"].value;
    const content = form["content"].value.trim();
    const file = form["cv"].files[0];
    if (!name || !phone || !email || !position || !content) {
      setError("Vui lòng điền đầy đủ thông tin bắt buộc.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Email không hợp lệ.");
      return;
    }
    if (file && file.size > 5 * 1024 * 1024) {
      setError("File phải nhỏ hơn 5MB.");
      return;
    }
    setError(null);
    setLoading(true);
    // TODO: Gửi dữ liệu lên server (tùy backend của bạn)
    // const formData = new FormData()
    // formData.append('name', name)
    // formData.append('phone', phone)
    // formData.append('email', email)
    // formData.append('position', position)
    // formData.append('content', content)
    // if (file) formData.append('cv', file)
    // await fetch('/api/apply', { method: 'POST', body: formData })
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 1200);
  };

  if (success) {
    return (
      <div className="w-full flex flex-col items-center py-12">
        <div className="text-green-600 text-2xl font-bold mb-2">
          Nộp CV thành công!
        </div>
        <div>Cảm ơn bạn đã ứng tuyển. Chúng tôi sẽ liên hệ lại sớm nhất.</div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-lg py-10 px-6 mt-12"
      onSubmit={handleSubmit}
    >
      <h2 className="font-bold text-2xl mb-6">Nộp CV ứng tuyển</h2>
      {error && <div className="text-rose-500 font-semibold mb-4">{error}</div>}
      <div className="flex flex-col gap-5">
        <div>
          <label className="font-semibold">Họ tên *</label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <label className="font-semibold">Số điện thoại *</label>
          <Input id="phone" name="phone" type="tel" required />
        </div>
        <div>
          <label className="font-semibold">Email *</label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <label className="font-semibold">Vị trí ứng tuyển *</label>
          <select
            id="position"
            name="position"
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">-- Chọn vị trí --</option>
            {POSITIONS.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="font-semibold">
            Nội dung (giới thiệu bản thân, kinh nghiệm, v.v.) *
          </label>
          <Textarea
            id="content"
            name="content"
            rows={8}
            maxLength={5000}
            required
            className="min-h-[120px] resize-none"
          />
          <div className="text-xs text-gray-500 mt-1">
            Tối đa 500 từ (~3500 ký tự)
          </div>
        </div>
        <div>
          <label className="font-semibold">
            Upload CV (PDF, DOC, DOCX, dưới 5MB)
          </label>
          <input
            id="cv"
            name="cv"
            type="file"
            accept=".pdf,.doc,.docx"
            className="block mt-1"
          />
        </div>
        <Button
          type="submit"
          variant="default"
          size="lg"
          className="text-lg font-bold flex flex-row gap-2 mt-4"
          disabled={loading}
        >
          {loading ? "Đang gửi..." : "Nộp CV"}
        </Button>
      </div>
    </form>
  );
};
export const JobApplyForm = memo(JobApplyFormComponent);
