
export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  message: string;
  created_at?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
