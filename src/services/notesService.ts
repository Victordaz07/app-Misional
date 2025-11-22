// services/notesService.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LessonNote } from '../types/index';

const NOTES_KEY_PREFIX = '@lesson_note';

export const NotesService = {
  // Guardar o actualizar nota
  saveNote: async (userId: string, lessonId: string, content: string): Promise<void> => {
    try {
      const existingNote = await NotesService.loadNote(userId, lessonId);
      const now = new Date().toISOString();

      const note: LessonNote = {
        userId,
        lessonId,
        content,
        createdAt: existingNote?.createdAt || now,
        updatedAt: now
      };

      const key = `${NOTES_KEY_PREFIX}_${userId}_${lessonId}`;
      await AsyncStorage.setItem(key, JSON.stringify(note));
    } catch (error) {
      console.error('Error saving note:', error);
      throw error;
    }
  },

  // Cargar nota específica
  loadNote: async (userId: string, lessonId: string): Promise<LessonNote | null> => {
    try {
      const key = `${NOTES_KEY_PREFIX}_${userId}_${lessonId}`;
      const noteJson = await AsyncStorage.getItem(key);
      return noteJson ? JSON.parse(noteJson) : null;
    } catch (error) {
      console.error('Error loading note:', error);
      return null;
    }
  },

  // Cargar todas las notas de un usuario
  loadUserNotes: async (userId: string): Promise<LessonNote[]> => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const userNoteKeys = keys.filter(key =>
        key.startsWith(NOTES_KEY_PREFIX) && key.includes(userId)
      );

      const notesJson = await AsyncStorage.multiGet(userNoteKeys);
      return notesJson
        .map(([_, value]) => value ? JSON.parse(value) : null)
        .filter(note => note !== null) as LessonNote[];
    } catch (error) {
      console.error('Error loading user notes:', error);
      return [];
    }
  },

  // Eliminar nota
  deleteNote: async (userId: string, lessonId: string): Promise<void> => {
    try {
      const key = `${NOTES_KEY_PREFIX}_${userId}_${lessonId}`;
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error deleting note:', error);
      throw error;
    }
  },

  // Eliminar todas las notas de un usuario
  deleteAllUserNotes: async (userId: string): Promise<void> => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const userNoteKeys = keys.filter(key =>
        key.startsWith(NOTES_KEY_PREFIX) && key.includes(userId)
      );

      await AsyncStorage.multiRemove(userNoteKeys);
    } catch (error) {
      console.error('Error deleting all user notes:', error);
      throw error;
    }
  }
};