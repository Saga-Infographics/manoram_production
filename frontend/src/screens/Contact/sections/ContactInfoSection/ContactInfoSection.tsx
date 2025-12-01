import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

const formFields = [
  {
    id: "name",
    label: "Name",
    placeholder: "Your Full Name",
    type: "input",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "your.email@example.com",
    type: "input",
  },
  {
    id: "subject",
    label: "Subject",
    placeholder: "Inquiry about...",
    type: "input",
  },
  {
    id: "message",
    label: "Message",
    placeholder: "Type your detailed message here.",
    type: "textarea",
  },
];

export const ContactInfoSection = (): JSX.Element => {
  return (
    <Card className="w-full bg-white/95 rounded-[14px] border border-solid border-[#e8e4dd] shadow-[0_20px_40px_rgba(10,15,44,0.06)]">
      <CardContent className="flex flex-col p-8 md:p-10">
        <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-secondary text-3xl md:text-4xl tracking-[0] leading-9 mb-6">
          Send a Booking Inquiry
        </h2>

        <p className="text-sm text-slate-600 mb-6">Share a brief description, preferred dates, and your budget range. We'll follow up with availability and next steps.</p>

        <form action="https://formspree.io/f/xvgvqljy" method="POST" className="flex flex-col gap-4">
          {formFields.map((field) => (
            <div key={field.id} className="flex flex-col gap-2">
              <Label
                htmlFor={field.id}
                className="[font-family:'Open_Sans',Helvetica] font-normal text-secondary text-xs tracking-[0] leading-5"
              >
                {field.label}
              </Label>
              {field.type === "input" ? (
                <Input
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  className="bg-slate-50 rounded-md border border-solid border-[#e6e3de] [font-family:'Open_Sans',Helvetica] font-normal text-[#565d6d] text-sm tracking-[0] leading-[22px] h-11 px-3"
                />
              ) : (
                <div className="relative">
                  <Textarea
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    className="bg-slate-50 rounded-md border border-solid border-[#e6e3de] [font-family:'Open_Sans',Helvetica] font-normal text-[#565d6d] text-sm tracking-[0] leading-[22px] h-32 px-3 pt-2 resize-none"
                  />
                  <img
                    className="absolute right-1 bottom-1 w-3 h-3"
                    alt="Resizing handle"
                    src="/resizing-handle.svg"
                  />
                </div>
              )}
            </div>
          ))}

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 border-0 h-12 rounded-md [font-family:'Open_Sans',Helvetica] font-semibold text-primary-foreground text-sm tracking-[0] leading-[22px] mt-2"
          >
            Send Inquiry
          </Button>

          <div className="text-center text-xs text-slate-500 mt-3">We respect your privacy — your details won't be shared.</div>
        </form>
      </CardContent>
    </Card>
  );
};
