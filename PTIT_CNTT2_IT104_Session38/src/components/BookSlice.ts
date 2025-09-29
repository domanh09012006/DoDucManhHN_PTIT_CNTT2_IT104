// src/features/books/booksSlice.ts
import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import api from '../api/api';
import type { RootState } from '../store';

export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  category: string;
}

interface BooksState {
  items: Book[];
  loading: boolean;
  error?: string | null;
}

const initialState: BooksState = {
  items: [],
  loading: false,
  error: null,
};

// Thunks
export const fetchBooks = createAsyncThunk('books/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const res = await api.get<Book[]>('/books');
    return res.data;
  } catch (err: any) {
    return rejectWithValue(err.message || 'Fetch failed');
  }
});

export const addBook = createAsyncThunk(
  'books/add',
  async (payload: Omit<Book, 'id'>, { rejectWithValue }) => {
    try {
      const res = await api.post<Book>('/books', payload);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.message || 'Add failed');
    }
  }
);

export const updateBook = createAsyncThunk(
  'books/update',
  async (payload: Book, { rejectWithValue }) => {
    try {
      const res = await api.put<Book>(`/books/${payload.id}`, payload);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.message || 'Update failed');
    }
  }
);

export const deleteBook = createAsyncThunk(
  'books/delete',
  async (id: string, { rejectWithValue }) => {
    try {
      await api.delete(`/books/${id}`);
      return id;
    } catch (err: any) {
      return rejectWithValue(err.message || 'Delete failed');
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // add
      .addCase(addBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, action: PayloadAction<Book>) => {
        state.items = [action.payload, ...state.items];
        state.loading = false;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // update
      .addCase(updateBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBook.fulfilled, (state, action: PayloadAction<Book>) => {
        state.items = state.items.map((b) => (b.id === action.payload.id ? action.payload : b));
        state.loading = false;
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // delete
      .addCase(deleteBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBook.fulfilled, (state, action: PayloadAction<string>) => {
        state.items = state.items.filter((b) => b.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const selectBooks = (state: RootState) => state.books.items;
export default booksSlice.reducer;
