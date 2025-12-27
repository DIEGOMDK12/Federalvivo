import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, MousePointer, Lock } from "lucide-react";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  const { data: analytics, isLoading, refetch, error } = useQuery({
    queryKey: ["/api/analytics", password],
    queryFn: async () => {
      try {
        const response = await fetch(`/api/analytics?password=${encodeURIComponent(password)}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Invalid password");
        }
        return response.json();
      } catch (err) {
        console.error("Analytics error:", err);
        throw err;
      }
    },
    enabled: isAuthenticated && password !== "",
    refetchInterval: 5000,
  });

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setPassword(passwordInput);
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-primary flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
              <Lock className="w-8 h-8" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-center mb-2">Painel Admin</h1>
          <p className="text-gray-600 text-center mb-6">Visualizar estatísticas do site</p>

          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <Input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full"
                data-testid="input-admin-password"
              />
            </div>
            <Button 
              type="submit"
              className="w-full"
              data-testid="button-admin-login"
            >
              Entrar
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Painel de Controle</h1>
          <p className="text-gray-600">Visualize as estatísticas do seu site em tempo real</p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Carregando dados...</p>
          </div>
        ) : error ? (
          <Card className="p-8 text-center bg-red-50 border-red-200">
            <p className="text-red-600 text-lg mb-4">Erro ao carregar dados</p>
            <p className="text-red-500 text-sm mb-6">{error instanceof Error ? error.message : "Erro desconhecido"}</p>
            <Button 
              variant="outline"
              onClick={() => refetch()}
              data-testid="button-admin-retry"
            >
              Tentar Novamente
            </Button>
          </Card>
        ) : analytics ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-2">Visualizações do Site</p>
                  <p className="text-5xl font-bold text-blue-600">{analytics.totalViews}</p>
                </div>
                <Eye className="w-16 h-16 text-blue-400 opacity-50" />
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-2">Cliques no Link</p>
                  <p className="text-5xl font-bold text-green-600">{analytics.totalClicks}</p>
                </div>
                <MousePointer className="w-16 h-16 text-green-400 opacity-50" />
              </div>
            </Card>
          </div>
        ) : null}

        <div className="mt-8 flex justify-end">
          <Button 
            variant="outline"
            onClick={() => {
              setIsAuthenticated(false);
              setPassword("");
              setPasswordInput("");
            }}
            data-testid="button-admin-logout"
          >
            Sair
          </Button>
        </div>

        {analytics && (
          <Card className="mt-8 p-6 bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <p className="font-semibold mb-2">Taxa de Conversão</p>
                <p className="text-2xl font-bold text-gray-900">
                  {analytics.totalViews > 0 
                    ? ((analytics.totalClicks / analytics.totalViews) * 100).toFixed(2) 
                    : "0"}%
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Última Atualização</p>
                <p className="text-gray-700">{new Date().toLocaleString("pt-BR")}</p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
