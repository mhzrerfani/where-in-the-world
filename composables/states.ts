import { useState } from "#imports";

export const useDark = () => useState<boolean>("dark", () => true);
export const useSearch = () => useState<string>("search");
export const useRegionsFilter = () =>
  useState<string>("regionsFilter", () => "");
export const useSorted = () => useState<string>("sorted", () => "");
