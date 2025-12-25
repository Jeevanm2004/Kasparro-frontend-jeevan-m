import { create } from 'zustand';
import { BrandSnapshot, AuditModule } from '@/types';

interface AppState {
    currentBrand: BrandSnapshot | null;
    modules: AuditModule[];
    selectedModuleId: string | null;
    isLoading: boolean;

    setBrand: (brand: BrandSnapshot) => void;
    setModules: (modules: AuditModule[]) => void;
    selectModule: (moduleId: string) => void;
    fetchInitialData: () => Promise<void>;
}

export const useAppStore = create<AppState>((set) => ({
    currentBrand: null,
    modules: [],
    selectedModuleId: null,
    isLoading: false,

    setBrand: (brand) => set({ currentBrand: brand }),
    setModules: (modules) => set({ modules }),
    selectModule: (moduleId) => set({ selectedModuleId: moduleId }),

    fetchInitialData: async () => {
        set({ isLoading: true });
        try {
            // Fetch Brand
            const brandRes = await fetch('/data/brand_snapshot.json');
            const brandData = await brandRes.json();

            // Fetch Modules
            const modulesRes = await fetch('/data/audit_modules.json');
            const modulesData = await modulesRes.json();

            set({
                currentBrand: brandData,
                modules: modulesData,
                isLoading: false
            });
        } catch (error) {
            console.error('Failed to load initial data', error);
            set({ isLoading: false });
        }
    }
}));
