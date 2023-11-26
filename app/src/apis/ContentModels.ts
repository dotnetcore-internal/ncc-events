export interface Article {
  id: string,
  title: string,
  date: string,
  img: string,
  url?: string,
}

export interface hasAuthor {
  author?: AuthorModel | AuthorModel[];
}

export interface hasDescription {
  description?: string;
}

export interface EventIndexModel extends Article, hasAuthor, hasDescription {
}

export interface AuthorModel {
  id: string,
  name: string,
  avatar: string,
  url?: string
}

export interface PageDescriptor {
  current: number,
  total: number
}

const hasAuthors = (model: AuthorModel | AuthorModel[] | null) => {
  if (!model) return false;
  if (Array.isArray(model)) return model.length > 0;
  return true;
};

const getAuthors = (model: AuthorModel | AuthorModel[] | null): AuthorModel[] => {
  if (!model) return [];
  if (Array.isArray(model)) return model;
  return [model];
};

const countAuthors = (model: AuthorModel | AuthorModel[] | null): number => {
  return getAuthors(model).length;
};

export {
  hasAuthors,
  getAuthors,
  countAuthors
};