import React, { useState } from 'react';
import { ArrowRight, Layers, Activity, Server, Cpu, Database, Shield } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import type { ProjectItem } from '../data/projects';

interface FeaturedProjectProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ onSelectProject }) => {
  const featured = PROJECTS.find((p) => p.isFeatured) || PROJECTS[0];
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const archNodes = [
    { id: 1, title: "PATIENT / WEARABLE", sub: "IoT Ingestion", icon: <Activity className="w-4 h-4" /> },
    { id: 2, title: "DATA PROCESSING", sub: "Pipeline Engine", icon: <Layers className="w-4 h-4" /> },
    { id: 3, title: "APACHE KAFKA", sub: "Event Stream", icon: <Layers className="w-4 h-4" /> },
    { id: 4, title: "MICROSERVICES", sub: "Spring Boot", icon: <Server className="w-4 h-4" /> },
    { id: 5, title: "AI / RISK ANALYSIS", sub: "TensorFlow Fed", icon: <Cpu className="w-4 h-4" /> },
    { id: 6, title: "DOCTOR DASHBOARD", sub: "Clinical UI", icon: <Database className="w-4 h-4" /> },
  ];

  return (
    <div className="mb-16">
      <div className="p-8 sm:p-10 rounded-2xl bg-[#EFEFEA] border border-[#DCDCD6] space-y-8 shadow-xs">
        
        {/* Header Tag */}
        <div className="flex items-center justify-between border-b border-[#DCDCD6] pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xl font-black text-[#2457D6]">01</span>
            <span className="font-mono text-xs font-bold text-[#171717] uppercase tracking-widest">
              FEATURED CASE STUDY
            </span>
          </div>
          {featured.conceptName && (
            <span className="font-mono text-xs text-[#626262]">({featured.conceptName})</span>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Case Study Information (6 Cols) */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-[#171717] tracking-tight leading-tight mb-2">
                {featured.title}
              </h3>
              {featured.coreConcept && (
                <p className="text-[#2457D6] font-mono text-xs font-bold">
                  "{featured.coreConcept}"
                </p>
              )}
            </div>

            <p className="text-sm text-[#626262] leading-relaxed">
              {featured.description}
            </p>

            {/* Technologies */}
            <div>
              <span className="font-mono text-xs font-bold text-[#171717] uppercase tracking-wider block mb-2">
                TECHNOLOGY:
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {featured.technologies.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    <span className="text-[#171717] font-semibold">{tech}</span>
                    {idx < featured.technologies.length - 1 && (
                      <span className="text-[#DCDCD6]">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Explore Project Action Button */}
            <div className="pt-2">
              <button
                onClick={() => onSelectProject(featured)}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#2457D6] hover:bg-[#1d4ed8] text-white font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <span>Explore Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Interactive Architecture Visualization (6 Cols) */}
          <div className="lg:col-span-6 p-6 rounded-xl bg-[#F7F7F4] border border-[#DCDCD6] space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-[#DCDCD6]">
              <span className="font-mono text-xs font-bold text-[#171717] uppercase tracking-wider">
                SYSTEM ARCHITECTURE FLOW
              </span>
              <span className="font-mono text-[10px] text-[#2457D6] font-bold">
                HOVER TO INSPECT PATH
              </span>
            </div>

            <div className="space-y-2 font-mono text-xs pt-1">
              {archNodes.map((node, i) => {
                const isActive = hoveredNode === node.id;
                return (
                  <React.Fragment key={node.id}>
                    <div
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      className={`p-3 rounded-lg border transition-all duration-200 cursor-default flex items-center justify-between ${
                        isActive
                          ? 'bg-[#2457D6] text-white border-[#2457D6] shadow-xs'
                          : 'bg-[#F7F7F4] text-[#171717] border-[#DCDCD6] hover:border-[#2457D6]/50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={isActive ? 'text-white' : 'text-[#2457D6]'}>
                          {node.icon}
                        </span>
                        <span className="font-bold">{node.title}</span>
                      </div>
                      <span className={`text-[10px] ${isActive ? 'text-blue-100' : 'text-[#626262]'}`}>
                        {node.sub}
                      </span>
                    </div>

                    {i < archNodes.length - 1 && (
                      <div className="flex justify-center my-0.5">
                        <div
                          className={`w-px h-3 transition-colors ${
                            hoveredNode === node.id || hoveredNode === node.id + 1
                              ? 'bg-[#2457D6] w-0.5'
                              : 'bg-[#DCDCD6]'
                          }`}
                        />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#DCDCD6] flex items-center justify-between font-mono text-[10px] text-[#626262]">
              <span>FHIR Data Interoperability</span>
              <span className="flex items-center gap-1 font-bold text-[#2457D6]">
                <Shield className="w-3 h-3" /> Keycloak Auth
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
