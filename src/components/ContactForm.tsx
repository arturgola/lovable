
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!values.name.trim()) {
      newErrors.name = t('nameRequired');
    }
    if (!values.email.trim()) {
      newErrors.email = t('emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = t('emailInvalid');
    }
    if (!values.message.trim()) {
      newErrors.message = t('messageRequired');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);

    try {
      // Netlify forms will automatically collect submissions from this form
      // We just need to make sure the name, data-netlify and netlify attributes are set
      toast({
        title: t('formSuccess'),
        description: '',
      });

      // Reset form values
      setValues({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      name="contact" 
      method="POST" 
      data-netlify="true"
      className="space-y-4"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="recipient" value="askordoors@gmail.com" />

      <div>
        <Input
          id="name"
          name="name"
          placeholder={t('name')}
          value={values.name}
          onChange={handleChange}
          className={`border-0 border-b rounded-none px-0 ${errors.name ? 'border-destructive' : 'border-border'}`}
        />
        {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
      </div>

      <div>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder={t('email')}
          value={values.email}
          onChange={handleChange}
          className={`border-0 border-b rounded-none px-0 ${errors.email ? 'border-destructive' : 'border-border'}`}
        />
        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
      </div>

      <div>
        <Textarea
          id="message"
          name="message"
          placeholder={t('message')}
          rows={3}
          value={values.message}
          onChange={handleChange}
          className={`border-0 border-b rounded-none px-0 resize-none ${errors.message ? 'border-destructive' : 'border-border'}`}
        />
        {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
      </div>

      <div>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          variant="outline" 
          className="rounded-none px-6 py-2 border"
        >
          {isSubmitting ? 
            <span className="flex items-center gap-2">
              <span className="animate-spin">◌</span> 
              {t('submit')}
            </span> : 
            t('submit')
          }
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
